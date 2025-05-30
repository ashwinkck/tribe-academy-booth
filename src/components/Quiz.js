import React, { useState, useCallback, useEffect } from 'react';
import { allQuestionsData } from '../questions'; // Adjust path if questions.js is elsewhere
import { auth, db } from '../firebase'; // Import Firebase auth and Firestore instances
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth'; // Firebase auth functions
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'; // Firestore functions

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Quiz = ({ onQuizComplete }) => {
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizPhase, setQuizPhase] = useState('initial');
  const [userId, setUserId] = useState(null);
  // Removed hasSubmittedDetails and quizCompletedInDb as primary controllers,
  // will rely on Firestore doc existence and its quizCompleted field.
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userDistrict, setUserDistrict] = useState('');
  const [userOrganization, setUserOrganization] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmittingInfo, setIsSubmittingInfo] = useState(false);

  // Effect to handle auth and initial quiz phase determination
  useEffect(() => {
    setQuizPhase('loadingAuth');
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const participantRef = doc(db, 'participants', user.uid);
        try {
          const participantDoc = await getDoc(participantRef);
          if (participantDoc.exists()) {
            const data = participantDoc.data();
            setUserName(data.name || ''); // Pre-fill name if exists

            if (data.quizCompleted) {
              setQuizPhase('alreadyParticipated');
            } else if (data.hasSubmitted) { 
              // User has submitted details but not completed. Start a fresh quiz.
              proceedToQuizQuestions(user.uid);
            } else {
              // User exists but hasn't submitted details (e.g. anonymous user, page refresh before info submit)
              setQuizPhase('collectInfo');
            }
          } else {
            // New user or no existing participant document
            setQuizPhase('collectInfo');
          }
        } catch (error) {
          console.error("Error fetching participant data:", error);
          setFormError("Could not verify your participation status. Please try refreshing.");
          setQuizPhase('error');
        }
      } else {
        signInAnonymously(auth)
          .catch((err) => {
            console.error("Anonymous sign-in error:", err);
            setFormError('Failed to initialize quiz session: ' + err.message);
            setQuizPhase('error');
          });
      }
    });
    return () => unsubscribe();
  }, []); // Runs once on mount

  const proceedToQuizQuestions = useCallback(async (currentUidPassed) => {
    const currentUid = currentUidPassed || userId;
    if (!currentUid) {
      console.error("User ID is not available for quiz.");
      setFormError("User session error. Cannot start quiz.");
      setQuizPhase('error');
      return;
    }
    const shuffledAll = shuffleArray(allQuestionsData);
    const selectedQuestions = shuffledAll.slice(0, 20); // MODIFIED: Select 20 questions

    const preparedQuestions = shuffleArray(
      selectedQuestions.map(q => ({
        ...q,
        options: shuffleArray([...q.options])
      }))
    );

    setCurrentQuizQuestions(preparedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setQuizPhase('playing');

    const participantRef = doc(db, 'participants', currentUid);
    try {
      // Update or set the document with current quiz state, marking quiz as not completed
      await setDoc(participantRef, {
        name: userName, // ensure these are available or use defaults
        phone: userPhone,
        email: userMail,
        district: userDistrict,
        organization: userOrganization,
        hasSubmitted: true, // This should be true at this point
        quizState: {
          currentQuizQuestions: preparedQuestions,
          currentQuestionIndex: 0,
          userAnswers: {},
          score: 0
        },
        quizCompleted: false, // Explicitly set to false when a new quiz starts
        lastQuizStartedAt: new Date().toISOString()
      }, { merge: true }); // Merge true to update existing doc or create if not exists
    } catch (error) {
      console.error("Error saving/updating initial quiz state:", error);
    }
  }, [userId, userName, userPhone, userMail, userDistrict, userOrganization]); // Include all dependencies that might be used in setDoc

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setFormError("User session not ready. Please wait or refresh.");
      return;
    }
    if (!userName.trim() || !userPhone.trim() || !userMail.trim() || !userDistrict.trim() || !userOrganization.trim()) {
      setFormError('All fields (Name, Phone, Email, District, Organization) are required.');
      return;
    }
    if (!/^\d{10}$/.test(userPhone.trim())) {
      setFormError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userMail.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormError('');
    setIsSubmittingInfo(true);

    const participantData = {
      name: userName,
      phone: userPhone,
      email: userMail,
      district: userDistrict,
      organization: userOrganization,
      submittedAt: new Date().toISOString(),
      hasSubmitted: true,
      quizCompleted: false
    };

    try {
      const participantRef = doc(db, 'participants', userId);
      await setDoc(participantRef, participantData, { merge: true }); 

      const formData = new FormData();
      formData.append("entry.981544575", userName); 
      formData.append("entry.876540130", userPhone); 
      formData.append("entry.1090493126", userMail); 
      formData.append("entry.797744142", userDistrict); 
      formData.append("entry.1946251765", userOrganization); 

      fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_CByYnL5TtARcb0y2YK10V8GHQ4ZJn3Y8Xji1zxXTMV9OfA/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors" 
      }).then(() => console.log("Attempted data submission to Google Form."))
        .catch(gfError => console.error("Error submitting to Google Form:", gfError));
      
      proceedToQuizQuestions(userId);

    } catch (err) {
      console.error("Error saving participant details:", err);
      setFormError('Failed to save details: ' + err.message);
    } finally {
      setIsSubmittingInfo(false);
    }
  };

  const updateFirestoreQuizState = useCallback(async (updatedQuizStateData) => {
    if (!userId) return;
    const participantRef = doc(db, 'participants', userId);
    try {
      await updateDoc(participantRef, { quizState: updatedQuizStateData });
    } catch (error) {
      console.error("Error updating quiz state in Firestore:", error);
    }
  }, [userId]);

  const handleAnswerSelect = (questionId, selectedOption) => {
    setUserAnswers(prev => {
      const newAnswers = { ...prev, [questionId]: selectedOption };
      updateFirestoreQuizState({
        currentQuizQuestions,
        currentQuestionIndex,
        userAnswers: newAnswers,
        score 
      });
      return newAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      updateFirestoreQuizState({
        currentQuizQuestions,
        currentQuestionIndex: newIndex,
        userAnswers,
        score
      });
    } else {
      let calculatedScore = 0;
      currentQuizQuestions.forEach(q => {
        if (userAnswers[q.id] === q.correctAnswer) {
          calculatedScore++;
        }
      });
      setScore(calculatedScore);
      setQuizPhase('results');

      if (userId) {
        const participantRef = doc(db, 'participants', userId);
        updateDoc(participantRef, {
          quizCompleted: true,
          finalScore: calculatedScore, 
          quizState: { 
            currentQuizQuestions,
            currentQuestionIndex, 
            userAnswers,
            score: calculatedScore
          }
        }).catch((err) => {
          console.error("Error marking quiz as completed or saving final score:", err);
        });
      }
    }
  };
  
  const resetAndStartOver = () => {
    // Resetting form fields, but user will re-auth and check status
    setUserName(''); 
    setUserPhone('');
    setUserMail('');
    setUserDistrict('');
    setUserOrganization('');
    setFormError('');
    setQuizPhase('loadingAuth'); // Re-trigger auth check to determine next phase properly
  };

  // UI Rendering
  if (quizPhase === 'loadingAuth') {
    return <div className="text-center p-10 text-white">Loading Quiz Session...</div>;
  }
  if (quizPhase === 'error') {
    return <div className="text-center p-10 text-red-500">{formError || "An error occurred initializing the quiz."}</div>;
  }

  if (quizPhase === 'alreadyParticipated') {
    return (
      <div className="text-center p-8 bg-gray-900 rounded-lg max-w-md mx-auto mt-10 border border-gray-700 shadow-2xl">
        <h2 className="text-3xl font-bold text-tribe-red-pink mb-6">Already Participated!</h2>
        <p className="text-gray-300 mb-8">Thank you, {userName || 'Participant'}! You’ve already completed the quiz.</p>
        {onQuizComplete && (
          <button onClick={onQuizComplete}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Close Quiz
          </button>
        )}
      </div>
    );
  }
  
  if (quizPhase === 'initial') { 
     return ( // This screen might be briefly visible or skipped if auth is fast
       <div className="text-center p-8 bg-brand-black rounded-lg max-w-md mx-auto mt-10 border border-gray-700 shadow-xl">
         <h2 className="text-3xl font-bold text-tribe-red-pink mb-6">Web3 Quiz Challenge!</h2>
         <p className="text-gray-300 mb-8">Test your knowledge with 20 random questions. Please provide your details to start.</p> {/* MODIFIED */}
         <button
           onClick={() => setQuizPhase('collectInfo')} // This button might not be used if useEffect auto-navigates
           className="bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-10 rounded-lg text-xl transition-transform duration-300 transform hover:scale-105"
         >
           Get Started
         </button>
       </div>
     );
  }

  if (quizPhase === 'collectInfo') {
    return (
      <div className="text-center p-6 md:p-8 bg-gray-900 rounded-lg max-w-lg mx-auto mt-10 border border-gray-700 shadow-2xl">
        <h2 className="text-2xl font-bold text-tribe-red-pink mb-6">Your Details</h2>
        <form onSubmit={handleInfoSubmit} className="space-y-4 text-left">
          {/* Form fields remain the same */}
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-1">Name <span className="text-red-500">*</span></label>
            <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required disabled={isSubmittingInfo}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"/>
          </div>
          <div>
            <label htmlFor="userPhone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input type="tel" id="userPhone" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required disabled={isSubmittingInfo}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"/>
          </div>
          <div> 
            <label htmlFor="userMail" className="block text-sm font-medium text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" id="userMail" value={userMail} onChange={(e) => setUserMail(e.target.value)} required disabled={isSubmittingInfo}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"/>
          </div>
          <div> 
            <label htmlFor="userDistrict" className="block text-sm font-medium text-gray-300 mb-1">District <span className="text-red-500">*</span></label>
            <input type="text" id="userDistrict" value={userDistrict} onChange={(e) => setUserDistrict(e.target.value)} required disabled={isSubmittingInfo}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"/>
          </div>
          <div>
            <label htmlFor="userOrganization" className="block text-sm font-medium text-gray-300 mb-1">Organization <span className="text-red-500">*</span></label>
            <input type="text" id="userOrganization" value={userOrganization} onChange={(e) => setUserOrganization(e.target.value)} required disabled={isSubmittingInfo}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-tribe-pink focus:border-tribe-pink"/>
          </div>
          {formError && <p className="text-red-400 text-sm text-center">{formError}</p>}
          <button type="submit" disabled={isSubmittingInfo}
            className="w-full bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-10 rounded-lg text-xl transition-transform duration-300 transform hover:scale-105 mt-6 disabled:opacity-50">
            {isSubmittingInfo ? 'Submitting...' : 'Start Quiz'}
          </button>
        </form>
      </div>
    );
  }

  if (quizPhase === 'results') {
    return (
      <div className="text-center p-8 bg-gray-900 rounded-lg max-w-md mx-auto mt-10 border border-gray-700 shadow-2xl">
        <h2 className="text-3xl font-bold text-tribe-red-pink mb-6">Quiz Finished!</h2>
        <p className="text-gray-300 mb-2">Thank you, {userName || 'Participant'}!</p>
        <p className="text-4xl text-tribe-mustard mb-8">Your Score: {score} / {currentQuizQuestions.length}</p> {/* This will now show score / 20 */}
        <button onClick={resetAndStartOver}
          className="bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-10 rounded-lg text-xl mr-4 transition-transform duration-300 transform hover:scale-105">
          Play Again
        </button>
        {onQuizComplete && (
          <button onClick={onQuizComplete}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Close Quiz
          </button>
        )}
      </div>
    );
  }

  if (quizPhase === 'playing') {
    if (!currentQuizQuestions.length || currentQuestionIndex >= currentQuizQuestions.length) {
      return <p className="text-white text-center p-10">Loading questions or quiz ended unexpectedly...</p>; 
    }
    const question = currentQuizQuestions[currentQuestionIndex];
    return (
      <div className="p-6 md:p-10 max-w-3xl mx-auto bg-gray-900 rounded-xl shadow-2xl text-white mt-10 border border-gray-700">
        <div className="mb-6">
          <p className="text-sm text-tribe-mustard font-semibold">Question {currentQuestionIndex + 1} of {currentQuizQuestions.length}</p> {/* This will now show X of 20 */}
          <h3 className="text-xl sm:text-2xl font-semibold mt-1">{question.text}</h3>
        </div>
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerSelect(question.id, option)}
              className={`block w-full p-4 rounded-lg text-left text-lg transition-all duration-200 transform hover:scale-[1.02]
                          ${userAnswers[question.id] === option 
                            ? 'bg-tribe-red-pink ring-2 ring-offset-2 ring-offset-gray-900 ring-white' 
                            : 'bg-gray-800 hover:bg-gray-700'}`}>
              {option}
            </button>
          ))}
        </div>
        <button onClick={handleNextQuestion} disabled={!userAnswers[question.id]}
          className="w-full bg-tribe-mustard hover:bg-opacity-80 text-brand-black font-bold py-3 px-8 rounded-lg text-xl disabled:opacity-50 disabled:cursor-not-allowed">
          {currentQuestionIndex < currentQuizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      </div>
    );
  }

  return <p className="text-white text-center p-10">Something went wrong with the quiz phase.</p>;
};

export default Quiz;
