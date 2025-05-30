// src/questions.js

// This is the data you provided.
// To avoid users seeing repeated questions, you'll need to make sure
// the 'text' (and ideally options) for each of the 100 questions is unique.
// Currently, the question text repeats every 10 questions (e.g., q1, q11, q21 are the same question).
export const allQuestionsData = [
  {
    id: 'q1',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Default Financing', 'Digital Finance', 'Decentralized Finance', 'Distributed File-system'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q2',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Decentralized cloud storage', 'Digital art and collectibles', 'Proof of Stake consensus', 'Secure messaging'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q3',
    text: "What is a 'smart contract'?",
    options: ['A legal document written by AI', 'A traditional contract stored on a blockchain', 'A self-executing contract with the terms of the agreement directly written into code', 'A financial derivative'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q4',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q5',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Ether', 'Solana', 'Tether', 'Bitcoin'],
    correctAnswer: "Ether"
  },
  {
    id: 'q6',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A decentralised organization governed by code and community votes', 'A digital advertising organization', 'A data analytics organization', 'A traditional company'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q7',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Stake', 'Delegated Proof of Stake', 'Proof of Work', 'Proof of Authority'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q8',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['The fee to execute operations on the network', 'Transportation fee', 'Download cost', 'Storage cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q9',
    text: "What is a wallet in Web3?",
    options: ['A USB stick', 'A leather pouch', 'A folder', 'A digital tool to store and manage blockchain assets'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q10',
    text: "Which of these is a popular Web3 wallet?",
    options: ['MetaMask', 'Venmo', 'Google Pay', 'PayPal'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q11',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Distributed File-system', 'Default Financing', 'Digital Finance', 'Decentralized Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q12',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Proof of Stake consensus', 'Digital art and collectibles', 'Decentralized cloud storage', 'Secure messaging'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q13',
    text: "What is a 'smart contract'?",
    options: ['A traditional contract stored on a blockchain', 'A financial derivative', 'A self-executing contract with the terms of the agreement directly written into code', 'A legal document written by AI'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q14',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Ripple', 'Bitcoin', 'Ethereum', 'Litecoin'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q15',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Tether', 'Solana', 'Ether', 'Bitcoin'],
    correctAnswer: "Ether"
  },
  {
    id: 'q16',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A decentralised organization governed by code and community votes', 'A digital advertising organization', 'A data analytics organization', 'A traditional company'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q17',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Stake', 'Proof of Authority', 'Delegated Proof of Stake', 'Proof of Work'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q18',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['The fee to execute operations on the network', 'Download cost', 'Transportation fee', 'Storage cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q19',
    text: "What is a wallet in Web3?",
    options: ['A USB stick', 'A digital tool to store and manage blockchain assets', 'A leather pouch', 'A folder'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q20',
    text: "Which of these is a popular Web3 wallet?",
    options: ['Google Pay', 'MetaMask', 'Venmo', 'PayPal'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q21',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Default Financing', 'Digital Finance', 'Distributed File-system', 'Decentralized Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q22',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Proof of Stake consensus', 'Secure messaging', 'Decentralized cloud storage', 'Digital art and collectibles'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q23',
    text: "What is a 'smart contract'?",
    options: ['A traditional contract stored on a blockchain', 'A financial derivative', 'A legal document written by AI', 'A self-executing contract with the terms of the agreement directly written into code'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q24',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Ethereum', 'Litecoin', 'Bitcoin', 'Ripple'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q25',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Bitcoin', 'Tether', 'Solana', 'Ether'],
    correctAnswer: "Ether"
  },
  {
    id: 'q26',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A traditional company', 'A decentralised organization governed by code and community votes', 'A digital advertising organization', 'A data analytics organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q27',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Authority', 'Proof of Stake', 'Proof of Work', 'Delegated Proof of Stake'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q28',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Download cost', 'Storage cost', 'Transportation fee', 'The fee to execute operations on the network'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q29',
    text: "What is a wallet in Web3?",
    options: ['A leather pouch', 'A digital tool to store and manage blockchain assets', 'A folder', 'A USB stick'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q30',
    text: "Which of these is a popular Web3 wallet?",
    options: ['MetaMask', 'PayPal', 'Venmo', 'Google Pay'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q31',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Distributed File-system', 'Default Financing', 'Decentralized Finance', 'Digital Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q32',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Decentralized cloud storage', 'Digital art and collectibles', 'Secure messaging', 'Proof of Stake consensus'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q33',
    text: "What is a 'smart contract'?",
    options: ['A financial derivative', 'A legal document written by AI', 'A traditional contract stored on a blockchain', 'A self-executing contract with the terms of the agreement directly written into code'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q34',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Bitcoin', 'Litecoin', 'Ripple', 'Ethereum'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q35',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Solana', 'Bitcoin', 'Tether', 'Ether'],
    correctAnswer: "Ether"
  },
  {
    id: 'q36',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A data analytics organization', 'A traditional company', 'A decentralised organization governed by code and community votes', 'A digital advertising organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q37',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Authority', 'Delegated Proof of Stake', 'Proof of Work', 'Proof of Stake'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q38',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Download cost', 'The fee to execute operations on the network', 'Transportation fee', 'Storage cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q39',
    text: "What is a wallet in Web3?",
    options: ['A folder', 'A digital tool to store and manage blockchain assets', 'A USB stick', 'A leather pouch'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q40',
    text: "Which of these is a popular Web3 wallet?",
    options: ['PayPal', 'MetaMask', 'Google Pay', 'Venmo'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q41',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Digital Finance', 'Default Financing', 'Distributed File-system', 'Decentralized Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q42',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Decentralized cloud storage', 'Secure messaging', 'Proof of Stake consensus', 'Digital art and collectibles'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q43',
    text: "What is a 'smart contract'?",
    options: ['A financial derivative', 'A legal document written by AI', 'A self-executing contract with the terms of the agreement directly written into code', 'A traditional contract stored on a blockchain'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q44',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Ethereum', 'Litecoin', 'Bitcoin', 'Ripple'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q45',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Ether', 'Bitcoin', 'Solana', 'Tether'],
    correctAnswer: "Ether"
  },
  {
    id: 'q46',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A decentralised organization governed by code and community votes', 'A digital advertising organization', 'A traditional company', 'A data analytics organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q47',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Authority', 'Proof of Work', 'Delegated Proof of Stake', 'Proof of Stake'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q48',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Storage cost', 'Transportation fee', 'The fee to execute operations on the network', 'Download cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q49',
    text: "What is a wallet in Web3?",
    options: ['A USB stick', 'A folder', 'A digital tool to store and manage blockchain assets', 'A leather pouch'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q50',
    text: "Which of these is a popular Web3 wallet?",
    options: ['PayPal', 'Google Pay', 'MetaMask', 'Venmo'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q51',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Decentralized Finance', 'Default Financing', 'Distributed File-system', 'Digital Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q52',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Proof of Stake consensus', 'Digital art and collectibles', 'Decentralized cloud storage', 'Secure messaging'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q53',
    text: "What is a 'smart contract'?",
    options: ['A financial derivative', 'A traditional contract stored on a blockchain', 'A legal document written by AI', 'A self-executing contract with the terms of the agreement directly written into code'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q54',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Ripple', 'Litecoin', 'Ethereum', 'Bitcoin'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q55',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Solana', 'Tether', 'Ether', 'Bitcoin'],
    correctAnswer: "Ether"
  },
  {
    id: 'q56',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A digital advertising organization', 'A traditional company', 'A data analytics organization', 'A decentralised organization governed by code and community votes'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q57',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Stake', 'Delegated Proof of Stake', 'Proof of Work', 'Proof of Authority'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q58',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Storage cost', 'Transportation fee', 'The fee to execute operations on the network', 'Download cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q59',
    text: "What is a wallet in Web3?",
    options: ['A digital tool to store and manage blockchain assets', 'A folder', 'A leather pouch', 'A USB stick'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q60',
    text: "Which of these is a popular Web3 wallet?",
    options: ['MetaMask', 'Venmo', 'Google Pay', 'PayPal'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q61',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Distributed File-system', 'Decentralized Finance', 'Digital Finance', 'Default Financing'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q62',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Secure messaging', 'Proof of Stake consensus', 'Digital art and collectibles', 'Decentralized cloud storage'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q63',
    text: "What is a 'smart contract'?",
    options: ['A self-executing contract with the terms of the agreement directly written into code', 'A legal document written by AI', 'A traditional contract stored on a blockchain', 'A financial derivative'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q64',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Ethereum', 'Ripple', 'Litecoin', 'Bitcoin'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q65',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Solana', 'Ether', 'Tether', 'Bitcoin'],
    correctAnswer: "Ether"
  },
  {
    id: 'q66',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A data analytics organization', 'A traditional company', 'A decentralised organization governed by code and community votes', 'A digital advertising organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q67',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Stake', 'Delegated Proof of Stake', 'Proof of Work', 'Proof of Authority'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q68',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Transportation fee', 'Storage cost', 'The fee to execute operations on the network', 'Download cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q69',
    text: "What is a wallet in Web3?",
    options: ['A leather pouch', 'A folder', 'A digital tool to store and manage blockchain assets', 'A USB stick'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q70',
    text: "Which of these is a popular Web3 wallet?",
    options: ['PayPal', 'Venmo', 'Google Pay', 'MetaMask'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q71',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Default Financing', 'Digital Finance', 'Distributed File-system', 'Decentralized Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q72',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Secure messaging', 'Digital art and collectibles', 'Proof of Stake consensus', 'Decentralized cloud storage'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q73',
    text: "What is a 'smart contract'?",
    options: ['A self-executing contract with the terms of the agreement directly written into code', 'A legal document written by AI', 'A traditional contract stored on a blockchain', 'A financial derivative'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q74',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Bitcoin', 'Ripple', 'Ethereum', 'Litecoin'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q75',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Solana', 'Bitcoin', 'Ether', 'Tether'],
    correctAnswer: "Ether"
  },
  {
    id: 'q76',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A traditional company', 'A decentralised organization governed by code and community votes', 'A digital advertising organization', 'A data analytics organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q77',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Stake', 'Proof of Work', 'Proof of Authority', 'Delegated Proof of Stake'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q78',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Storage cost', 'The fee to execute operations on the network', 'Transportation fee', 'Download cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q79',
    text: "What is a wallet in Web3?",
    options: ['A leather pouch', 'A digital tool to store and manage blockchain assets', 'A folder', 'A USB stick'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q80',
    text: "Which of these is a popular Web3 wallet?",
    options: ['Google Pay', 'PayPal', 'Venmo', 'MetaMask'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q81',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Digital Finance', 'Distributed File-system', 'Decentralized Finance', 'Default Financing'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q82',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Digital art and collectibles', 'Secure messaging', 'Proof of Stake consensus', 'Decentralized cloud storage'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q83',
    text: "What is a 'smart contract'?",
    options: ['A traditional contract stored on a blockchain', 'A financial derivative', 'A legal document written by AI', 'A self-executing contract with the terms of the agreement directly written into code'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q84',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Litecoin', 'Ethereum', 'Bitcoin', 'Ripple'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q85',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Bitcoin', 'Solana', 'Tether', 'Ether'],
    correctAnswer: "Ether"
  },
  {
    id: 'q86',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A traditional company', 'A digital advertising organization', 'A decentralised organization governed by code and community votes', 'A data analytics organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q87',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Authority', 'Proof of Stake', 'Delegated Proof of Stake', 'Proof of Work'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q88',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Transportation fee', 'Download cost', 'Storage cost', 'The fee to execute operations on the network'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q89',
    text: "What is a wallet in Web3?",
    options: ['A digital tool to store and manage blockchain assets', 'A USB stick', 'A leather pouch', 'A folder'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q90',
    text: "Which of these is a popular Web3 wallet?",
    options: ['PayPal', 'MetaMask', 'Google Pay', 'Venmo'],
    correctAnswer: "MetaMask"
  },
  {
    id: 'q91',
    text: "What does 'DeFi' stand for in the context of Web3?",
    options: ['Default Financing', 'Decentralized Finance', 'Digital Finance', 'Distributed File-system'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q92',
    text: "Which of the following is a common use case for NFTs?",
    options: ['Secure messaging', 'Decentralized cloud storage', 'Proof of Stake consensus', 'Digital art and collectibles'],
    correctAnswer: "Digital art and collectibles"
  },
  {
    id: 'q93',
    text: "What is a 'smart contract'?",
    options: ['A legal document written by AI', 'A traditional contract stored on a blockchain', 'A financial derivative', 'A self-executing contract with the terms of the agreement directly written into code'],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code"
  },
  {
    id: 'q94',
    text: "Which blockchain is known for its support of smart contracts and dApps?",
    options: ['Ethereum', 'Ripple', 'Bitcoin', 'Litecoin'],
    correctAnswer: "Ethereum"
  },
  {
    id: 'q95',
    text: "What is the native cryptocurrency of the Ethereum blockchain?",
    options: ['Ether', 'Bitcoin', 'Solana', 'Tether'],
    correctAnswer: "Ether"
  },
  {
    id: 'q96',
    text: "What is the purpose of a DAO in Web3?",
    options: ['A decentralised organization governed by code and community votes', 'A data analytics organization', 'A traditional company', 'A digital advertising organization'],
    correctAnswer: "A decentralised organization governed by code and community votes"
  },
  {
    id: 'q97',
    text: "Which consensus mechanism does Bitcoin use?",
    options: ['Proof of Authority', 'Proof of Stake', 'Proof of Work', 'Delegated Proof of Stake'],
    correctAnswer: "Proof of Work"
  },
  {
    id: 'q98',
    text: "What does 'gas fee' refer to in Ethereum?",
    options: ['Download cost', 'Transportation fee', 'The fee to execute operations on the network', 'Storage cost'],
    correctAnswer: "The fee to execute operations on the network"
  },
  {
    id: 'q99',
    text: "What is a wallet in Web3?",
    options: ['A leather pouch', 'A USB stick', 'A digital tool to store and manage blockchain assets', 'A folder'],
    correctAnswer: "A digital tool to store and manage blockchain assets"
  },
  {
    id: 'q100',
    text: "Which of these is a popular Web3 wallet?",
    options: ['MetaMask', 'Venmo', 'PayPal', 'Google Pay'],
    correctAnswer: "MetaMask"
  }
];
