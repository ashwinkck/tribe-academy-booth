import IntroAnimation from './components/IntroAnimation'; 
import React, { useState, useEffect } from 'react'; 
import { TrendingUp, Gift, BookOpen, Zap, Twitter as TwitterIcon, Linkedin as LinkedinIcon, Send, Instagram as InstagramIcon, X as XIcon, RefreshCw } from 'lucide-react';
import Quiz from './components/Quiz'; 

// EVENT_DETAILS object
const EVENT_DETAILS = {
  eventName: "Crypto Conclave 2025 – Edition 01",
  boothName: "Tribe Academy",
  tagline: "Dive into the Decentralized Future with Tribe Academy!",
  tshirtHeadline: "FREE Exclusive Tribe Academy Web3 T-Shirt!",
  tshirtSubtext: "Visit the Tribe Academy booth, connect with us, and grab your limited edition tee!",
  tshirtImageFront: "/images/front.jpg", 
  tshirtImageBack: "/images/back.jpg",   
  courseHeadline: "Unlock Web3 Mastery: Tribe Academy's Premier Course",
  courseDescription: "From blockchain basics to advanced dApp development, Tribe Academy's course is your gateway to becoming a Web3 pro. Special event discount available!",
  courseCTA: "Learn More & Enroll",
  footerText: "© 2025 Tribe Academy. All Rights Reserved.",
  socialLinks: {
    x: "https://x.com/tribeacademy_in", 
    linkedin: "https://www.linkedin.com/company/tribeacademyin/", 
    instagram: "https://www.instagram.com/tribeacademy.in?igsh=NGIwZ2tzd2NxOG0z" 
  },
  logoImageFile: "image_ee4ad0.png" 
};

// SectionTitle component remains the same
const SectionTitle = ({ children, color = "text-tribe-red-pink" }) => (
  <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ${color} tracking-tight`}>
    {children}
  </h2>
);

// Navigation Component remains the same
const Navbar = ({ setActiveSection }) => { 
  const navItems = ["Home", "T-Shirts", "Course", "Contact"];
  return (
    <nav className="bg-brand-black bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={EVENT_DETAILS.logoImageFile}
              alt="Tribe Academy Logo"
              className="h-10 w-auto mr-3 rounded-full"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="font-bold text-2xl text-white">{EVENT_DETAILS.boothName}</span>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:bg-gray-800 hover:text-tribe-mustard px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
             <span className="text-gray-400 text-sm">Menu</span> {/* Placeholder for mobile menu icon */}
          </div>
        </div>
      </div>
    </nav>
  );
};

// HeroSection remains the same
const HeroSection = () => {
  return (
    <section id="home" className="bg-brand-black text-white py-20 sm:py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <img
            src={EVENT_DETAILS.logoImageFile}
            alt="Tribe Academy Logo"
            className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-8 rounded-full shadow-xl border-2 border-tribe-red-pink"
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-tribe-red-pink">{EVENT_DETAILS.boothName}</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-300 mb-4">
          at {EVENT_DETAILS.eventName}!
        </p>
        <p className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
          {EVENT_DETAILS.tagline}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => document.getElementById('tshirts')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-tribe-red-pink hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl w-full sm:w-auto"
          >
            Get Free T-Shirt!
          </button>
          <button
            onClick={() => document.getElementById('course')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:bg-tribe-mustard text-tribe-mustard font-semibold hover:text-brand-black py-3 px-8 border-2 border-tribe-mustard hover:border-transparent rounded-lg text-lg transition-colors duration-300 shadow-xl w-full sm:w-auto"
          >
            Explore Our Course
          </button>
        </div>
      </div>
    </section>
  );
};

// T-Shirt Section Component - MODIFIED
const TshirtSection = () => {
  // === MODIFIED: Start by showing the back image ===
  const [showFrontImage, setShowFrontImage] = useState(false); 

  const handleToggleImage = () => {
    setShowFrontImage(!showFrontImage);
  };

  const frontImage = EVENT_DETAILS.tshirtImageFront || "https://placehold.co/600x400/000000/FFFFFF?text=T-Shirt+Front&font=inter";
  const backImage = EVENT_DETAILS.tshirtImageBack || "https://placehold.co/600x400/000000/CCCCCC?text=T-Shirt+Back&font=inter";

  return (
    <section id="tshirts" className="py-16 sm:py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionTitle color="text-tribe-mustard">
          <Gift className="inline-block mr-3 text-tribe-mustard" size={40} />
          {EVENT_DETAILS.tshirtHeadline}
        </SectionTitle>
        <div className="max-w-3xl mx-auto text-center bg-brand-black p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-800">
          <div className="relative mb-4 group">
            <img
              src={showFrontImage ? frontImage : backImage} // Logic remains the same, initial state changed
              alt={`Tribe Academy T-Shirt - ${showFrontImage ? 'Front View' : 'Back View'}`}
              className="w-full max-w-md mx-auto rounded-lg shadow-lg transition-opacity duration-300 ease-in-out"
              key={showFrontImage ? 'front' : 'back'} 
              onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = `https://placehold.co/600x400/000000/FFFFFF?text=T-Shirt+Image+Error&font=inter`;
              }}
            />
            <button
              onClick={handleToggleImage}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Toggle T-shirt view"
            >
              <RefreshCw size={20} />
            </button>
          </div>
          <button
            onClick={handleToggleImage}
            className="mb-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-300 inline-flex items-center"
          >
            <RefreshCw size={18} className="mr-2"/>
            View {showFrontImage ? 'Back' : 'Front'} {/* This text will now correctly say "View Front" initially */}
          </button>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">
            {EVENT_DETAILS.tshirtSubtext}
          </p>
          <p className="text-md text-tribe-red-pink font-semibold">
            How to claim:
          </p>
          <ul className="list-disc list-inside text-gray-400 mt-2 mb-6 text-left max-w-md mx-auto">
            <li>Visit our booth ({EVENT_DETAILS.boothName}).</li>
            <li>Chat with our awesome team.</li>
            <li>Scan the special QR code at the booth.</li>
            <li>Show confirmation, get your tee! (Limited stock daily)</li>
          </ul>
          <TrendingUp size={32} className="mx-auto text-tribe-red-pink animate-bounce" />
        </div>
      </div>
    </section>
  );
};

// CourseSection remains the same
const CourseSection = () => {
  return (
    <section id="course" className="py-16 sm:py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionTitle color="text-tribe-red-pink">
          <BookOpen className="inline-block mr-3 text-tribe-red-pink" size={40} />
          {EVENT_DETAILS.courseHeadline}
        </SectionTitle>
        <div className="max-w-3xl mx-auto bg-brand-black p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-700">
          <img
            src="https://png.pngtree.com/png-vector/20220527/ourmid/pngtree-bitcoin-logo-design-template-png-image_4749408.png"
            alt="Web3 Course Visual - Bitcoin Logo"
            className="w-full max-w-md mx-auto rounded-lg mb-8 shadow-lg bg-white p-4"
            onError={(e) => e.target.src = 'https://placehold.co/600x300/000000/FFFFFF?text=Course+Image+Error&font=inter'}
          />
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            {EVENT_DETAILS.courseDescription}
          </p>
          <div className="bg-tribe-mustard text-brand-black p-6 rounded-lg shadow-lg mb-8">
            <h4 className="font-bold text-xl mb-2">Event Exclusive Offer!</h4>
            <p>Sign up during {EVENT_DETAILS.eventName} and receive a 20% discount + bonus resources!</p>
          </div>
          <button
            onClick={() => alert("Course sign-up/info link clicked! Replace alert with actual navigation or modal.")}
            className="w-full bg-tribe-red-pink hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-xl"
          >
            {EVENT_DETAILS.courseCTA}
          </button>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Or visit the {EVENT_DETAILS.boothName} booth for a personal consultation!
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer component remains the same
const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-black text-gray-400 py-12 sm:py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <img
            src={EVENT_DETAILS.logoImageFile}
            alt="Tribe Academy Logo"
            className="w-16 h-16 mx-auto mb-4 rounded-full"
            onError={(e) => { e.target.style.display = 'none'; }}
        />
        <p className="text-lg mb-4 text-gray-300">Connect with <span className="text-tribe-red-pink font-semibold">{EVENT_DETAILS.boothName}</span> & stay updated!</p>
        <div className="flex justify-center space-x-6 mb-8">
          {EVENT_DETAILS.socialLinks.x && (
            <a href={EVENT_DETAILS.socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X profile" className="hover:text-tribe-red-pink transition-colors">
              <XIcon size={28} /> 
            </a>
          )}
          {EVENT_DETAILS.socialLinks.linkedin && (
             <a href={EVENT_DETAILS.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-tribe-red-pink transition-colors">
              <LinkedinIcon size={28} />
            </a>
          )}
          {EVENT_DETAILS.socialLinks.instagram && (
            <a href={EVENT_DETAILS.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="hover:text-tribe-red-pink transition-colors">
              <InstagramIcon size={28} />
            </a>
          )}
        </div>
        <p className="text-sm">{EVENT_DETAILS.footerText}</p>
        <p className="text-xs mt-2">
          Designed for {EVENT_DETAILS.eventName}
        </p>
      </div>
    </footer>
  );
};


// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showIntro, setShowIntro] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false); 

  useEffect(() => {
    if (!showIntro && !showQuiz) { 
        const sectionElement = document.getElementById(activeSection);
        if (sectionElement && (activeSection !== 'home' || window.scrollY > 0)) {
             // Scroll logic
        }
    }
  }, [activeSection, showIntro, showQuiz]); 

  if (showIntro) {
    return <IntroAnimation onAnimationEnd={() => setShowIntro(false)} />;
  }

  if (showQuiz) {
    return (
      <div className="bg-brand-black min-h-screen font-inter text-gray-200 py-10 flex flex-col items-center justify-start pt-20">
        <Quiz onQuizComplete={() => setShowQuiz(false)} />
      </div>
    );
  }

  return (
    <div className="bg-brand-black min-h-screen font-inter text-gray-200">
      <Navbar 
        setActiveSection={setActiveSection} 
      />
      <div className="text-center py-5 bg-brand-black">
         <button 
            onClick={() => setShowQuiz(true)}
            className="bg-tribe-red-pink hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform duration-300 transform hover:scale-105 shadow-lg"
         >
            Take the Web3 Quiz!
         </button>
      </div>

      <HeroSection />
      <TshirtSection />
      <CourseSection />
      <Footer />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    </div>
  );
}
