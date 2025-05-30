// src/questions.js

// This data contains the 290 complete questions you provided.
export const allQuestionsData = [
  // EASY LEVEL (Questions 1-100) - As provided
  {
    id: 'q1',
    text: "What does 'forex' stand for?",
    options: ['Foreign exchange', 'Forward exchange', 'Financial exchange', 'Fixed exchange'],
    correctAnswer: "Foreign exchange"
  },
  {
    id: 'q2',
    text: "What is the most traded currency pair in forex?",
    options: ['GBP/USD', 'USD/JPY', 'EUR/USD', 'USD/CHF'],
    correctAnswer: "EUR/USD"
  },
  {
    id: 'q3',
    text: "What is Bitcoin?",
    options: ['A company', 'A digital currency', 'A bank', 'A government bond'],
    correctAnswer: "A digital currency"
  },
  {
    id: 'q4',
    text: "Who created Bitcoin?",
    options: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Charlie Lee', 'Roger Ver'],
    correctAnswer: "Satoshi Nakamoto"
  },
  {
    id: 'q5',
    text: "What is a blockchain?",
    options: ['A type of bank', 'A distributed ledger technology', 'A cryptocurrency exchange', 'A trading platform'],
    correctAnswer: "A distributed ledger technology"
  },
  {
    id: 'q6',
    text: "What does 'HODL' mean in crypto?",
    options: ['Hold On for Dear Life', 'A trading strategy', 'A type of wallet', 'An exchange name'],
    correctAnswer: "Hold On for Dear Life"
  },
  {
    id: 'q7',
    text: "What is the base currency in the pair EUR/USD?",
    options: ['USD', 'EUR', 'Both equally', 'Neither'],
    correctAnswer: "EUR"
  },
  {
    id: 'q8',
    text: "What is a pip in forex trading?",
    options: ['A type of currency', 'The smallest price move', 'A trading platform', 'A country\'s currency code'],
    correctAnswer: "The smallest price move"
  },
  {
    id: 'q9',
    text: "What is Ethereum?",
    options: ['Only a cryptocurrency', 'A blockchain platform', 'A trading exchange', 'A mining hardware'],
    correctAnswer: "A blockchain platform"
  },
  {
    id: 'q10',
    text: "What is a cryptocurrency wallet?",
    options: ['A physical wallet for coins', 'A software to store crypto keys', 'A bank account', 'A trading account'],
    correctAnswer: "A software to store crypto keys"
  },
  {
    id: 'q11',
    text: "What does 'DeFi' stand for?",
    options: ['Digital Finance', 'Decentralized Finance', 'Direct Finance', 'Dynamic Finance'],
    correctAnswer: "Decentralized Finance"
  },
  {
    id: 'q12',
    text: "What is the symbol for Japanese Yen?",
    options: ['JPY', 'JPN', 'YEN', 'JY'],
    correctAnswer: "JPY"
  },
  {
    id: 'q13',
    text: "What is mining in cryptocurrency?",
    options: ['Digging for physical coins', 'Process of validating transactions', 'Buying cryptocurrencies', 'Selling cryptocurrencies'],
    correctAnswer: "Process of validating transactions"
  },
  {
    id: 'q14',
    text: "What is a smart contract?",
    options: ['A legal document', 'Self-executing contract with code', 'A trading agreement', 'An insurance policy'],
    correctAnswer: "Self-executing contract with code"
  },
  {
    id: 'q15',
    text: "What does 'NFT' stand for?",
    options: ['New Financial Token', 'Non-Fungible Token', 'Net Future Trading', 'Next Generation Fund'],
    correctAnswer: "Non-Fungible Token"
  },
  {
    id: 'q16',
    text: "What is leverage in forex trading?",
    options: ['Using borrowed money to trade', 'A type of currency', 'A trading strategy', 'A market analysis tool'],
    correctAnswer: "Using borrowed money to trade"
  },
  {
    id: 'q17',
    text: "What is the largest cryptocurrency by market cap?",
    options: ['Ethereum', 'Bitcoin', 'Ripple', 'Litecoin'],
    correctAnswer: "Bitcoin"
  },
  {
    id: 'q18',
    text: "What is Web3?",
    options: ['The third version of a website', 'Decentralized internet', 'A web browser', 'A programming language'],
    correctAnswer: "Decentralized internet"
  },
  {
    id: 'q19',
    text: "What is a DAO?",
    options: ['Digital Asset Operation', 'Decentralized Autonomous Organization', 'Direct Access Order', 'Dynamic Asset Organization'],
    correctAnswer: "Decentralized Autonomous Organization"
  },
  {
    id: 'q20',
    text: "What is the currency code for British Pound?",
    options: ['BP', 'GBP', 'UKP', 'BRP'],
    correctAnswer: "GBP"
  },
  {
    id: 'q21',
    text: "What is gas in Ethereum?",
    options: ['Fuel for cars', 'Transaction fee', 'A type of token', 'Mining equipment'],
    correctAnswer: "Transaction fee"
  },
  {
    id: 'q22',
    text: "What is a bull market?",
    options: ['Market going down', 'Market going up', 'Stable market', 'Volatile market'],
    correctAnswer: "Market going up"
  },
  {
    id: 'q23',
    text: "What is a bear market?",
    options: ['Market going up', 'Market going down', 'Stable market', 'New market'],
    correctAnswer: "Market going down"
  },
  {
    id: 'q24',
    text: "What is staking in crypto?",
    options: ['Gambling with coins', 'Locking coins to earn rewards', 'Selling all coins', 'Trading actively'],
    correctAnswer: "Locking coins to earn rewards"
  },
  {
    id: 'q25',
    text: "What is the currency symbol for Euro?",
    options: ['EU', 'EUR', 'E', 'ER'],
    correctAnswer: "EUR"
  },
  {
    id: 'q26',
    text: "What is a dApp?",
    options: ['A mobile app', 'Decentralized application', 'A desktop app', 'A web app'],
    correctAnswer: "Decentralized application"
  },
  {
    id: 'q27',
    text: "What is yield farming?",
    options: ['Growing crops', 'Earning rewards by providing liquidity', 'Mining cryptocurrencies', 'Trading stocks'],
    correctAnswer: "Earning rewards by providing liquidity"
  },
  {
    id: 'q28',
    text: "What is a whitepaper in crypto?",
    options: ['Official government document', 'Technical document explaining a project', 'Trading manual', 'Legal contract'],
    correctAnswer: "Technical document explaining a project"
  },
  {
    id: 'q29',
    text: "What does 'FOMO' mean?",
    options: ['Fear of Missing Out', 'First of Many Orders', 'Future Options Market Order', 'Fixed Order Market Operation'],
    correctAnswer: "Fear of Missing Out"
  },
  {
    id: 'q30',
    text: "What is the smallest unit of Bitcoin?",
    options: ['Bit', 'Satoshi', 'Wei', 'Gwei'],
    correctAnswer: "Satoshi"
  },
  {
    id: 'q31',
    text: "What is a market maker?",
    options: ['Someone who creates markets', 'A trading bot', 'An exchange owner', 'A government regulator'],
    correctAnswer: "Someone who creates markets"
  },
  {
    id: 'q32',
    text: "What is slippage in trading?",
    options: ['Price difference from expected', 'A trading error', 'Network delay', 'Exchange fee'],
    correctAnswer: "Price difference from expected"
  },
  {
    id: 'q33',
    text: "What is a node in blockchain?",
    options: ['A connection point', 'A computer in the network', 'A transaction', 'A mining device'],
    correctAnswer: "A computer in the network"
  },
  {
    id: 'q34',
    text: "What is the currency code for Swiss Franc?",
    options: ['SF', 'CHF', 'SWF', 'SCH'],
    correctAnswer: "CHF"
  },
  {
    id: 'q35',
    text: "What is a hash in blockchain?",
    options: ['A password', 'A unique digital fingerprint', 'A transaction amount', 'A wallet address'],
    correctAnswer: "A unique digital fingerprint"
  },
  {
    id: 'q36',
    text: "What is cold storage?",
    options: ['Storing crypto offline', 'Freezing transactions', 'A type of mining', 'Cloud storage'],
    correctAnswer: "Storing crypto offline"
  },
  {
    id: 'q37',
    text: "What is hot storage?",
    options: ['Storing crypto online', 'High-temperature mining', 'Fast trading', 'Emergency backup'],
    correctAnswer: "Storing crypto online"
  },
  {
    id: 'q38',
    text: "What is a seed phrase?",
    options: ['Starting a garden', 'Recovery words for wallet', 'Trading signal', 'Password hint'],
    correctAnswer: "Recovery words for wallet"
  },
  {
    id: 'q39',
    text: "What is liquidity in trading?",
    options: ['Water content', 'Ease of buying/selling', 'Profit margin', 'Trading volume'],
    correctAnswer: "Ease of buying/selling"
  },
  {
    id: 'q40',
    text: "What is volatility?",
    options: ['Price stability', 'Price fluctuation degree', 'Trading volume', 'Market size'],
    correctAnswer: "Price fluctuation degree"
  },
  {
    id: 'q41',
    text: "What is a fork in blockchain?",
    options: ['Eating utensil', 'Protocol change/split', 'Trading strategy', 'Mining tool'],
    correctAnswer: "Protocol change/split"
  },
  {
    id: 'q42',
    text: "What is consensus in blockchain?",
    options: ['General agreement', 'Network agreement on transactions', 'Popular opinion', 'Voting system'],
    correctAnswer: "Network agreement on transactions"
  },
  {
    id: 'q43',
    text: "What is market cap?",
    options: ['Market limit', 'Total value of all coins', 'Daily trading volume', 'Price ceiling'],
    correctAnswer: "Total value of all coins"
  },
  {
    id: 'q44',
    text: "What is a limit order?",
    options: ['Maximum trade amount', 'Order at specific price', 'Minimum trade amount', 'Market restriction'],
    correctAnswer: "Order at specific price"
  },
  {
    id: 'q45',
    text: "What is a market order?",
    options: ['Current market price order', 'Future price order', 'Average price order', 'Historical price order'],
    correctAnswer: "Current market price order"
  },
  {
    id: 'q46',
    text: "What is arbitrage?",
    options: ['Legal dispute resolution', 'Profit from price differences', 'Random trading', 'Long-term investing'],
    correctAnswer: "Profit from price differences"
  },
  {
    id: 'q47',
    text: "What is a stop loss?",
    options: ['Emergency brake', 'Order to limit losses', 'Profit taking strategy', 'Market pause'],
    correctAnswer: "Order to limit losses"
  },
  {
    id: 'q48',
    text: "What is technical analysis?",
    options: ['Computer repair', 'Price chart analysis', 'Fundamental research', 'News analysis'],
    correctAnswer: "Price chart analysis"
  },
  {
    id: 'q49',
    text: "What is fundamental analysis?",
    options: ['Basic math', 'Economic factor analysis', 'Chart patterns', 'Price movements'],
    correctAnswer: "Economic factor analysis"
  },
  {
    id: 'q50',
    text: "What is a candlestick chart?",
    options: ['Lighting equipment', 'Price visualization method', 'Trading tool', 'Market indicator'],
    correctAnswer: "Price visualization method"
  },
  {
    id: 'q51',
    text: "What is support level?",
    options: ['Customer service', 'Price floor level', 'Help documentation', 'Technical assistance'],
    correctAnswer: "Price floor level"
  },
  {
    id: 'q52',
    text: "What is resistance level?",
    options: ['Opposition force', 'Price ceiling level', 'Network security', 'Trading difficulty'],
    correctAnswer: "Price ceiling level"
  },
  {
    id: 'q53',
    text: "What is a trend?",
    options: ['Fashion style', 'Price direction pattern', 'Popular topic', 'Market news'],
    correctAnswer: "Price direction pattern"
  },
  {
    id: 'q54',
    text: "What is volume in trading?",
    options: ['Sound level', 'Amount of trading activity', 'Container size', 'Price range'],
    correctAnswer: "Amount of trading activity"
  },
  {
    id: 'q55',
    text: "What is a breakout?",
    options: ['Prison escape', 'Price breaking support/resistance', 'System malfunction', 'Market crash'],
    correctAnswer: "Price breaking support/resistance"
  },
  {
    id: 'q56',
    text: "What is consolidation?",
    options: ['Combining companies', 'Sideways price movement', 'Strengthening position', 'Market recovery'],
    correctAnswer: "Sideways price movement"
  },
  {
    id: 'q57',
    text: "What is a pump and dump?",
    options: ['Water system', 'Artificial price manipulation', 'Exercise routine', 'Construction work'],
    correctAnswer: "Artificial price manipulation"
  },
  {
    id: 'q58',
    text: "What is FIAT currency?",
    options: ['Car brand', 'Government-issued currency', 'Digital currency', 'Gold-backed currency'],
    correctAnswer: "Government-issued currency"
  },
  {
    id: 'q59',
    text: "What is a cryptocurrency exchange?",
    options: ['Currency conversion service', 'Platform to trade cryptocurrencies', 'Bank branch', 'Government office'],
    correctAnswer: "Platform to trade cryptocurrencies"
  },
  {
    id: 'q60',
    text: "What is KYC?",
    options: ['Keep Your Coins', 'Know Your Customer', 'Key Your Code', 'Keep Your Capital'],
    correctAnswer: "Know Your Customer"
  },
  {
    id: 'q61',
    text: "What is AML?",
    options: ['Advanced Machine Learning', 'Anti-Money Laundering', 'Automated Market Listing', 'Alternative Market Logic'],
    correctAnswer: "Anti-Money Laundering"
  },
  {
    id: 'q62',
    text: "What is a public key?",
    options: ['Physical key', 'Cryptographic key for receiving', 'Password', 'PIN code'],
    correctAnswer: "Cryptographic key for receiving"
  },
  {
    id: 'q63',
    text: "What is a private key?",
    options: ['Secret room key', 'Cryptographic key for signing', 'Personal password', 'Bank account number'],
    correctAnswer: "Cryptographic key for signing"
  },
  {
    id: 'q64',
    text: "What is double spending?",
    options: ['Spending twice as much', 'Using same digital money twice', 'Duplicate transactions', 'Extra charges'],
    correctAnswer: "Using same digital money twice"
  },
  {
    id: 'q65',
    text: "What is a mempool?",
    options: ['Swimming pool', 'Pending transactions pool', 'Memory storage', 'Mining pool'],
    correctAnswer: "Pending transactions pool"
  },
  {
    id: 'q66',
    text: "What is confirmation in blockchain?",
    options: ['Email verification', 'Transaction validation', 'Account approval', 'Identity check'],
    correctAnswer: "Transaction validation"
  },
  {
    id: 'q67',
    text: "What is a genesis block?",
    options: ['Origin story', 'First block in blockchain', 'Special transaction', 'New cryptocurrency'],
    correctAnswer: "First block in blockchain"
  },
  {
    id: 'q68',
    text: "What is proof of work?",
    options: ['Employment certificate', 'Consensus mechanism', 'Work permit', 'Project documentation'],
    correctAnswer: "Consensus mechanism"
  },
  {
    id: 'q69',
    text: "What is proof of stake?",
    options: ['Ownership certificate', 'Consensus mechanism', 'Investment proof', 'Stake ownership'],
    correctAnswer: "Consensus mechanism"
  },
  {
    id: 'q70',
    text: "What is a validator?",
    options: ['Parking ticket officer', 'Network participant verifying transactions', 'Quality checker', 'Security guard'],
    correctAnswer: "Network participant verifying transactions"
  },
  {
    id: 'q71',
    text: "What is Web 1.0?",
    options: ['First internet version', 'Read-only web', 'Basic websites', 'All of the above'],
    correctAnswer: "All of the above"
  },
  {
    id: 'q72',
    text: "What is Web 2.0?",
    options: ['Second internet version', 'Interactive web', 'Social media era', 'All of the above'],
    correctAnswer: "All of the above"
  },
  {
    id: 'q73',
    text: "What is decentralization?",
    options: ['Moving offices', 'Distributing control/power', 'Reducing staff', 'Closing branches'],
    correctAnswer: "Distributing control/power"
  },
  {
    id: 'q74',
    text: "What is an ICO?",
    options: ['Ice Cold Option', 'Initial Coin Offering', 'International Crypto Organization', 'Investment Contract Order'],
    correctAnswer: "Initial Coin Offering"
  },
  {
    id: 'q75',
    text: "What is an IDO?",
    options: ['Initial Data Offering', 'Initial DEX Offering', 'International Development Organization', 'Investment Distribution Order'],
    correctAnswer: "Initial DEX Offering"
  },
  {
    id: 'q76',
    text: "What is a DEX?",
    options: ['Development Exchange', 'Decentralized Exchange', 'Digital Exchange', 'Direct Exchange'],
    correctAnswer: "Decentralized Exchange"
  },
  {
    id: 'q77',
    text: "What is a CEX?",
    options: ['Centralized Exchange', 'Cryptocurrency Exchange', 'Central Exchange', 'Certified Exchange'],
    correctAnswer: "Centralized Exchange"
  },
  {
    id: 'q78',
    text: "What is tokenomics?",
    options: ['Token mathematics', 'Token economics', 'Token mechanics', 'Token technology'],
    correctAnswer: "Token economics"
  },
  {
    id: 'q79',
    text: "What is a utility token?",
    options: ['Electricity token', 'Token with specific use case', 'Universal token', 'Unique token'],
    correctAnswer: "Token with specific use case"
  },
  {
    id: 'q80',
    text: "What is a security token?",
    options: ['Safety device', 'Investment contract token', 'Secure storage token', 'System security token'],
    correctAnswer: "Investment contract token"
  },
  {
    id: 'q81',
    text: "What is burning tokens?",
    options: ['Physical destruction', 'Permanently removing from supply', 'Heated storage', 'Fast trading'],
    correctAnswer: "Permanently removing from supply"
  },
  {
    id: 'q82',
    text: "What is minting tokens?",
    options: ['Creating new tokens', 'Flavoring tokens', 'Storing tokens', 'Trading tokens'],
    correctAnswer: "Creating new tokens"
  },
  {
    id: 'q83',
    text: "What is a multisig wallet?",
    options: ['Multiple signature wallet', 'Multi-currency wallet', 'Multiple user wallet', 'Multi-platform wallet'],
    correctAnswer: "Multiple signature wallet"
  },
  {
    id: 'q84',
    text: "What is a paper wallet?",
    options: ['Wallet made of paper', 'Private keys on paper', 'Printed transaction history', 'Physical cryptocurrency'],
    correctAnswer: "Private keys on paper"
  },
  {
    id: 'q85',
    text: "What is a hardware wallet?",
    options: ['Computer hardware', 'Physical crypto storage device', 'Wallet repair tool', 'Trading hardware'],
    correctAnswer: "Physical crypto storage device"
  },
  {
    id: 'q86',
    text: "What is a software wallet?",
    options: ['Wallet development software', 'Digital wallet application', 'Wallet management system', 'Computer program'],
    correctAnswer: "Digital wallet application"
  },
  {
    id: 'q87',
    text: "What is a brain wallet?",
    options: ['Smart wallet', 'Memorized private key', 'AI-powered wallet', 'Thinking wallet'],
    correctAnswer: "Memorized private key"
  },
  {
    id: 'q88',
    text: "What is 2FA?",
    options: ['Two Factor Authentication', 'Two Financial Advisors', 'Twice Fast Access', 'Two Forex Accounts'],
    correctAnswer: "Two Factor Authentication"
  },
  {
    id: 'q89',
    text: "What is a QR code?",
    options: ['Quality Rating code', 'Quick Response code', 'Quantum Research code', 'Question Request code'],
    correctAnswer: "Quick Response code"
  },
  {
    id: 'q90',
    text: "What is a transaction hash?",
    options: ['Transaction history', 'Unique transaction identifier', 'Transaction amount', 'Transaction fee'],
    correctAnswer: "Unique transaction identifier"
  },
  {
    id: 'q91',
    text: "What is block time?",
    options: ['Time to create new block', 'Blocked time period', 'Trading time block', 'System downtime'],
    correctAnswer: "Time to create new block"
  },
  {
    id: 'q92',
    text: "What is block size?",
    options: ['Physical block dimensions', 'Data amount in block', 'Number of transactions', 'Block creation time'],
    correctAnswer: "Data amount in block"
  },
  {
    id: 'q93',
    text: "What is a orphan block?",
    options: ['Abandoned block', 'Valid block not in main chain', 'Broken block', 'Empty block'],
    correctAnswer: "Valid block not in main chain"
  },
  {
    id: 'q94',
    text: "What is network hash rate?",
    options: ['Network speed', 'Total mining power', 'Hash function rate', 'Network capacity'],
    correctAnswer: "Total mining power"
  },
  {
    id: 'q95',
    text: "What is difficulty adjustment?",
    options: ['Problem-solving help', 'Mining difficulty change', 'Learning curve', 'System configuration'],
    correctAnswer: "Mining difficulty change"
  },
  {
    id: 'q96',
    text: "What is a halving event?",
    options: ['Splitting something', 'Reward reduction by half', 'Price drop', 'Network split'],
    correctAnswer: "Reward reduction by half"
  },
  {
    id: 'q97',
    text: "What is immutability?",
    options: ['Inability to change', 'Immune system', 'Immediate action', 'Imitation ability'],
    correctAnswer: "Inability to change"
  },
  {
    id: 'q98',
    text: "What is transparency in blockchain?",
    options: ['Clear material', 'Open and visible transactions', 'Invisible transactions', 'Clean interface'],
    correctAnswer: "Open and visible transactions"
  },
  {
    id: 'q99',
    text: "What is pseudonymity?",
    options: ['False identity', 'Partial anonymity', 'Real identity', 'No identity'],
    correctAnswer: "Partial anonymity"
  },
  {
    id: 'q100',
    text: "What is censorship resistance?",
    options: ['Against media', 'Cannot be blocked/controlled', 'Resistant to criticism', 'Content filtering'],
    correctAnswer: "Cannot be blocked/controlled"
  },

  // MEDIUM LEVEL (Questions 101-200)
  {
    id: 'q101',
    text: "What is the typical spread range for EUR/USD during London session?",
    options: ['0.1-0.3 pips', '0.5-1.5 pips', '2-5 pips', '10-20 pips'],
    correctAnswer: "0.5-1.5 pips"
  },
  {
    id: 'q102',
    text: "What is the Lightning Network?",
    options: ['Fast internet connection', 'Bitcoin scaling solution', 'Power grid system', 'Weather monitoring network'],
    correctAnswer: "Bitcoin scaling solution"
  },
  {
    id: 'q103',
    text: "What consensus algorithm does Ethereum 2.0 use?",
    options: ['Proof of Work', 'Proof of Stake', 'Delegated Proof of Stake', 'Proof of Authority'],
    correctAnswer: "Proof of Stake"
  },
  {
    id: 'q104',
    text: "What is impermanent loss?",
    options: ['Temporary memory loss', 'Potential loss from providing liquidity', 'Permanent fund loss', 'Transaction fee loss'],
    correctAnswer: "Potential loss from providing liquidity"
  },
  {
    id: 'q105',
    text: "What is the ERC-20 standard?",
    options: ['Error code 20', 'Ethereum token standard', 'Exchange rate calculation', 'European regulation code'],
    correctAnswer: "Ethereum token standard"
  },
  {
    id: 'q106',
    text: "What time does the London forex session open (GMT)?",
    options: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM'],
    correctAnswer: "8:00 AM"
  },
  {
    id: 'q107',
    text: "What is a flash loan?",
    options: ['Quick photography', 'Uncollateralized loan within single transaction', 'Fast loan approval', 'Emergency funding'],
    correctAnswer: "Uncollateralized loan within single transaction"
  },
  {
    id: 'q108',
    text: "What is the maximum supply of Bitcoin?",
    options: ['20 million', '21 million', '25 million', 'Unlimited'],
    correctAnswer: "21 million"
  },
  {
    id: 'q109',
    text: "What is MEV?",
    options: ['Maximum Extractable Value', 'Minimum Exchange Volume', 'Market Entry Value', 'Monthly Earnings Value'],
    correctAnswer: "Maximum Extractable Value"
  },
  {
    id: 'q110',
    text: "What is a oracle in blockchain?",
    options: ['Ancient wisdom', 'External data provider', 'Prediction system', 'Divine guidance'],
    correctAnswer: "External data provider"
  },
  {
    id: 'q111',
    text: "What is the carry trade strategy?",
    options: ['Physical carrying', 'Borrowing low-yield, lending high-yield', 'Carrying trades overnight', 'Transportation trading'],
    correctAnswer: "Borrowing low-yield, lending high-yield"
  },
  {
    id: 'q112',
    text: "What is Uniswap?",
    options: ['University swap program', 'Decentralized exchange', 'Uniform swap protocol', 'Universal trading platform'],
    correctAnswer: "Decentralized exchange"
  },
  {
    id: 'q113',
    text: "What is governance token?",
    options: ['Government issued token', 'Token for protocol voting rights', 'Regulatory compliance token', 'Administrative access token'],
    correctAnswer: "Token for protocol voting rights"
  },
  {
    id: 'q114',
    text: "What is wrapped Bitcoin (wBTC)?",
    options: ['Bitcoin in packaging', 'Bitcoin on Ethereum blockchain', 'Secured Bitcoin', 'Protected Bitcoin storage'],
    correctAnswer: "Bitcoin on Ethereum blockchain"
  },
  {
    id: 'q115',
    text: "What is the Byzantine Generals Problem?",
    options: ['Historical military issue', 'Distributed consensus challenge', 'Leadership conflict', 'Communication breakdown'],
    correctAnswer: "Distributed consensus challenge"
  },
  {
    id: 'q116',
    text: "What is slashing in proof of stake?",
    options: ['Price reduction', 'Penalty for malicious behavior', 'Reward cutting', 'Stake reduction'],
    correctAnswer: "Penalty for malicious behavior"
  },
  {
    id: 'q117',
    text: "What is a rollup in blockchain?",
    options: ['Rolling transaction', 'Layer 2 scaling solution', 'Bundle of transactions', 'Backup system'],
    correctAnswer: "Layer 2 scaling solution"
  },
  {
    id: 'q118',
    text: "What is the difference between APR and APY?",
    options: ['No difference', 'APY includes compounding', 'APR is higher', 'APY is annual only'],
    correctAnswer: "APY includes compounding"
  },
  {
    id: 'q119',
    text: "What is a rug pull?",
    options: ['Carpet cleaning', 'Exit scam by developers', 'Price manipulation', 'Market crash'],
    correctAnswer: "Exit scam by developers"
  },                                                                                                                                            {
    id: 'q120',
    text: "What is Total Value Locked (TVL)?",
    options: ['Total Verified Ledger', 'Assets locked in DeFi protocols', 'Total Volume Limit', 'Transaction Value Log'],
    correctAnswer: "Assets locked in DeFi protocols"
  },
  {
    id: 'q121',
    text: "What causes currency appreciation?",
    options: ['Increased demand', 'Decreased supply', 'Positive economic data', 'All of the above'],
    correctAnswer: "All of the above"
  },
  {
    id: 'q122',
    text: "What is an automated market maker (AMM)?",
    options: ['Automatic trading bot', 'Algorithm for token pricing', 'Market manipulation tool', 'Artificial market manager'],
    correctAnswer: "Algorithm for token pricing"
  },
  {
    id: 'q123',
    text: "What is gas optimization?",
    options: ['Car fuel efficiency', 'Reducing transaction costs', 'Improving speed', 'Better performance'],
    correctAnswer: "Reducing transaction costs"
  },
  {
    id: 'q124',
    text: "What is a sidechain?",
    options: ['Alternative blockchain', 'Secondary trading platform', 'Backup system', 'Side project'],
    correctAnswer: "Alternative blockchain"
  },
  {
    id: 'q125',
    text: "What is atomic swap?",
    options: ['Nuclear exchange', 'Cross-chain trade without intermediary', 'Instant transaction', 'Atomic level trading'],
    correctAnswer: "Cross-chain trade without intermediary"
  },
  {
    id: 'q126',
    text: "What is the Trilemma in blockchain?",
    options: ['Three-way problem', 'Scalability, security, decentralization balance', 'Triple taxation', 'Three-layer architecture'],
    correctAnswer: "Scalability, security, decentralization balance"
  },
  {
    id: 'q127',
    text: "What is front-running?",
    options: ['Leading a race', 'Trading ahead of large orders', 'First to market', 'Early adoption'],
    correctAnswer: "Trading ahead of large orders"
  },
  {
    id: 'q128',
    text: "What is sandwich attack?",
    options: ['Food poisoning', 'MEV exploitation technique', 'DDoS attack', 'Phishing method'],
    correctAnswer: "MEV exploitation technique"
  },
  {
    id: 'q129',
    text: "What is composability in DeFi?",
    options: ['Music composition', 'Protocols working together', 'Component assembly', 'Composite materials'],
    correctAnswer: "Protocols working together"
  },
  {
    id: 'q130',
    text: "What is a bonding curve?",
    options: ['Mathematical relationship', 'Token price mechanism', 'Bonding process', 'Curved bond investment'],
    correctAnswer: "Token price mechanism"
  },
  {
    id: 'q131',
    text: "What is the Ethereum Virtual Machine (EVM)?",
    options: ['Virtual reality system', 'Runtime environment for smart contracts', 'Mining software', 'Virtual trading platform'],
    correctAnswer: "Runtime environment for smart contracts"
  },
  {
    id: 'q132',
    text: "What is a state channel?",
    options: ['Television channel', 'Off-chain scaling solution', 'Government communication', 'Data transmission channel'],
    correctAnswer: "Off-chain scaling solution"
  },
  {
    id: 'q133',
    text: "What is economic finality?",
    options: ['End of economics', 'Transaction cost exceeds reversal benefit', 'Economic conclusion', 'Financial completion'],
    correctAnswer: "Transaction cost exceeds reversal benefit"
  },
  {
    id: 'q134',
    text: "What is a merkle tree?",
    options: ['Type of plant', 'Data structure for verification', 'Family tree', 'Decision tree'],
    correctAnswer: "Data structure for verification"
  },
  {
    id: 'q135',
    text: "What is sharding?",
    options: ['Breaking glass', 'Database partitioning technique', 'Sharing resources', 'Fragmenting data'],
    correctAnswer: "Database partitioning technique"
  },
  {
    id: 'q136',
    text: "What is a commit-reveal scheme?",
    options: ['Confession system', 'Two-phase commitment protocol', 'Reveal party game', 'Promise keeping method'],
    correctAnswer: "Two-phase commitment protocol"
  },
  {
    id: 'q137',
    text: "What is the difference between coins and tokens?",
    options: ['No difference', 'Coins have own blockchain, tokens don\'t', 'Coins are physical', 'Tokens are more valuable'],
    correctAnswer: "Coins have own blockchain, tokens don't"
  },
  {
    id: 'q138',
    text: "What is a liquidity pool?",
    options: ['Swimming pool', 'Collection of funds for trading', 'Emergency fund', 'Liquid assets storage'],
    correctAnswer: "Collection of funds for trading"
  },
  {
    id: 'q139',
    text: "What is cross-chain interoperability?",
    options: ['Chain crossing', 'Different blockchains communicating', 'Blockchain compatibility', 'Network connection'],
    correctAnswer: "Different blockchains communicating"
  },
  {
    id: 'q140',
    text: "What is a cryptographic hash function?",
    options: ['Encrypted function', 'One-way mathematical function', 'Secret calculation', 'Hidden algorithm'],
    correctAnswer: "One-way mathematical function"
  },
  {
    id: 'q141',
    text: "What is the purpose of nonce in blockchain?",
    options: ['Nonsense value', 'Number used once for mining', 'Network once', 'Node instance'],
    correctAnswer: "Number used once for mining"
  },
  {
    id: 'q142',
    text: "What is a smart contract audit?",
    options: ['Intelligence test', 'Security review of contract code', 'Contract negotiation', 'Legal review'],
    correctAnswer: "Security review of contract code"
  },
  {
    id: 'q143',
    text: "What is gas limit?",
    options: ['Car fuel limit', 'Maximum gas willing to pay', 'Speed limit', 'Transaction limit'],
    correctAnswer: "Maximum gas willing to pay"
  },
  {
    id: 'q144',
    text: "What is gas price?",
    options: ['Fuel cost', 'Cost per unit of gas', 'Transaction fee', 'Network fee'],
    correctAnswer: "Cost per unit of gas"
  },
  {
    id: 'q145',
    text: "What is a replay attack?",
    options: ['Video replay', 'Reusing valid transmission', 'Playing again', 'Attack repetition'],
    correctAnswer: "Reusing valid transmission"
  },
  {
    id: 'q146',
    text: "What is deterministic wallet?",
    options: ['Predetermined wallet', 'Wallet generating keys from seed', 'Fixed wallet', 'Decided wallet'],
    correctAnswer: "Wallet generating keys from seed"
  },
  {
    id: 'q147',
    text: "What is hierarchical deterministic (HD) wallet?",
    options: ['High definition wallet', 'Tree-structured key generation', 'Hard drive wallet', 'High-density wallet'],
    correctAnswer: "Tree-structured key generation"
  },
  {
    id: 'q148',
    text: "What is BIP in Bitcoin?",
    options: ['Basic Investment Plan', 'Bitcoin Improvement Proposal', 'Blockchain Implementation Protocol', 'Binary Internet Protocol'],
    correctAnswer: "Bitcoin Improvement Proposal"
  },
  {
    id: 'q149',
    text: "What is Segregated Witness (SegWit)?",
    options: ['Separated testimony', 'Bitcoin scaling upgrade', 'Witness protection', 'Isolated verification'],
    correctAnswer: "Bitcoin scaling upgrade"
  },
  {
    id: 'q150',
    text: "What is the UTXO model?",
    options: ['Unspent Transaction Output', 'Universal Transaction Exchange Order', 'Unified Transfer Exchange Operation', 'Ultimate Transaction eXecution Option'],
    correctAnswer: "Unspent Transaction Output"
  },
  {
    id: 'q151',
    text: "What is account-based model?",
    options: ['Bank account system', 'Balance tracking method', 'User account management', 'Account creation model'],
    correctAnswer: "Balance tracking method"
  },
  {
    id: 'q152',
    text: "What is transaction finality?",
    options: ['Final transaction', 'Irreversible confirmation', 'Last transaction', 'Transaction completion'],
    correctAnswer: "Irreversible confirmation"
  },
  {
    id: 'q153',
    text: "What is probabilistic finality?",
    options: ['Probable ending', 'Increasing confidence over time', 'Statistical completion', 'Likelihood calculation'],
    correctAnswer: "Increasing confidence over time"
  },
  {
    id: 'q154',
    text: "What is absolute finality?",
    options: ['Complete ending', 'Immediate irreversible confirmation', 'Final answer', 'Ultimate conclusion'],
    correctAnswer: "Immediate irreversible confirmation"
  },
  {
    id: 'q155',
    text: "What is a light client?",
    options: ['Lightweight customer', 'Simplified network participant', 'Easy client software', 'Basic user interface'],
    correctAnswer: "Simplified network participant"
  },
  {
    id: 'q156',
    text: "What is a full node?",
    options: ['Complete information', 'Complete blockchain copy', 'Full participation', 'Maximum capacity'],
    correctAnswer: "Complete blockchain copy"
  },
  {
    id: 'q157',
    text: "What is a mining pool?",
    options: ['Swimming pool for miners', 'Group mining together', 'Mining location', 'Mineral extraction site'],
    correctAnswer: "Group mining together"
  },
  {
    id: 'q158',
    text: "What is hashrate?",
    options: ['Hash calculation speed', 'Hash function rate', 'Hashing efficiency', 'Hash generation speed'],
    correctAnswer: "Hash calculation speed"
  },
  {
    id: 'q159',
    text: "What is mining difficulty?",
    options: ['How hard mining is', 'Computational effort required', 'Mining complexity', 'Difficulty level'],
    correctAnswer: "Computational effort required"
  },
  {
    id: 'q160',
    text: "What is block reward?",
    options: ['Prize for winning', 'Payment for mining block', 'Reward system', 'Bonus payment'],
    correctAnswer: "Payment for mining block"
  },
  {
    id: 'q161',
    text: "What is transaction fee?",
    options: ['Service charge', 'Payment for transaction processing', 'Network cost', 'Processing fee'],
    correctAnswer: "Payment for transaction processing"
  },
  {
    id: 'q162',
    text: "What is mempool congestion?",
    options: ['Memory problem', 'Too many pending transactions', 'Pool overcrowding', 'System overload'],
    correctAnswer: "Too many pending transactions"
  },
  {
    id: 'q163',
    text: "What is fee market?",
    options: ['Market for fees', 'Competition for transaction inclusion', 'Fee trading platform', 'Cost marketplace'],
    correctAnswer: "Competition for transaction inclusion"
  },
  {
    id: 'q164',
    text: "What is replace-by-fee (RBF)?",
    options: ['Fee replacement', 'Transaction fee update mechanism', 'Substitute payment', 'Alternative fee method'],
    correctAnswer: "Transaction fee update mechanism"
  },
  {
    id: 'q165',
    text: "What is child-pays-for-parent (CPFP)?",
    options: ['Family payment system', 'Transaction fee acceleration method', 'Parent-child relationship', 'Inheritance mechanism'],
    correctAnswer: "Transaction fee acceleration method"
  },
  {
    id: 'q166',
    text: "What is a dust attack?",
    options: ['Cleaning attack', 'Small amount tracking method', 'Particle bombardment', 'Cleaning protocol'],
    correctAnswer: "Small amount tracking method"
  },
  {
    id: 'q167',
    text: "What is coin mixing?",
    options: ['Blending coins', 'Privacy enhancement technique', 'Cocktail mixing', 'Currency combination'],
    correctAnswer: "Privacy enhancement technique"
  },
  {
    id: 'q168',
    text: "What is a tumbler?",
    options: ['Drinking glass', 'Cryptocurrency mixing service', 'Acrobatic performer', 'Mixing device'],
    correctAnswer: "Cryptocurrency mixing service"
  },
  {
    id: 'q169',
    text: "What is zero-knowledge proof?",
    options: ['No knowledge required', 'Proving without revealing information', 'Zero information proof', 'Unknown verification'],
    correctAnswer: "Proving without revealing information"
  },
  {
    id: 'q170',
    text: "What is zk-SNARK?",
    options: ['Zero-knowledge Succinct Non-interactive ARgument of Knowledge', 'Zero-knowledge Secure Network Authentication and Recognition Kit', 'Zero-knowledge Systematic Network Analysis and Reporting Kit', 'Zero-knowledge Simple Network Access and Resource Kit'],
    correctAnswer: "Zero-knowledge Succinct Non-interactive ARgument of Knowledge"
  },
  {
    id: 'q171',
    text: "What is ring signature?",
    options: ['Wedding ring signing', 'Anonymous signature scheme', 'Circular signature', 'Ring-shaped signature'],
    correctAnswer: "Anonymous signature scheme"
  },
  {
    id: 'q172',
    text: "What is stealth address?",
    options: ['Hidden location', 'Anonymous receiving address', 'Secret address', 'Invisible address'],
    correctAnswer: "Anonymous receiving address"
  },
  {
    id: 'q173',
    text: "What is Monero's privacy feature?",
    options: ['Ring signatures', 'Stealth addresses', 'RingCT', 'All of the above'],
    correctAnswer: "All of the above"
  },
  {
    id: 'q174',
    text: "What is a privacy coin?",
    options: ['Secret currency', 'Anonymous cryptocurrency', 'Private payment', 'Hidden money'],
    correctAnswer: "Anonymous cryptocurrency"
  },
  {
    id: 'q175',
    text: "What is KYC compliance?",
    options: ['Keep Your Coins safe', 'Know Your Customer regulations', 'Key Your Code properly', 'Keep Your Capital secure'],
    correctAnswer: "Know Your Customer regulations"
  },
  {
    id: 'q176',
    text: "What is AML compliance?",
    options: ['Advanced Machine Learning', 'Anti-Money Laundering regulations', 'Automated Market Listing', 'Alternative Market Logic'],
    correctAnswer: "Anti-Money Laundering regulations"
  },
  {
    id: 'q177',
    text: "What is regulatory arbitrage?",
    options: ['Legal dispute resolution', 'Exploiting regulatory differences', 'Regulatory compliance', 'Rule arbitration'],
    correctAnswer: "Exploiting regulatory differences"
  },
  {
    id: 'q178',
    text: "What is a CBDC?",
    options: ['Central Bank Digital Currency', 'Crypto Bank Digital Coin', 'Central Blockchain Digital Currency', 'Community Based Digital Currency'],
    correctAnswer: "Central Bank Digital Currency"
  },
  {
    id: 'q179',
    text: "What is algorithmic stablecoin?",
    options: ['Algorithm-based stable currency', 'Mathematical stable coin', 'Automated stable token', 'Artificial stable currency'],
    correctAnswer: "Algorithm-based stable currency"
  },
  {
    id: 'q180',
    text: "What is collateralized stablecoin?",
    options: ['Collaborative stable coin', 'Asset-backed stable currency', 'Collected stable token', 'Combined stable currency'],
    correctAnswer: "Asset-backed stable currency"
  },
  {
    id: 'q181',
    text: "What is a peg in stablecoins?",
    options: ['Wooden fastener', 'Fixed exchange rate', 'Hanging mechanism', 'Attachment point'],
    correctAnswer: "Fixed exchange rate"
  },
  {
    id: 'q182',
    text: "What is depegging?",
    options: ['Removing pegs', 'Losing fixed exchange rate', 'Detaching mechanism', 'Unfastening process'],
    correctAnswer: "Losing fixed exchange rate"
  },
  {
    id: 'q183',
    text: "What is arbitrage trading?",
    options: ['Dispute resolution trading', 'Profit from price differences', 'Arbitrary trading', 'Random trading'],
    correctAnswer: "Profit from price differences"
  },
  {
    id: 'q184',
    text: "What is triangular arbitrage?",
    options: ['Three-way arbitrage opportunity', 'Triangle-shaped trading', 'Geometric arbitrage', 'Angular trading strategy'],
    correctAnswer: "Three-way arbitrage opportunity"
  },
  {
    id: 'q185',
    text: "What is statistical arbitrage?",
    options: ['Statistics-based arbitrage', 'Mathematical trading strategy', 'Data-driven arbitrage', 'All of the above'],
    correctAnswer: "All of the above"
  },
  {
    id: 'q186',
    text: "What is basis trading?",
    options: ['Fundamental trading', 'Price difference exploitation', 'Basic trading strategy', 'Foundation trading'],
    correctAnswer: "Price difference exploitation"
  },
  {
    id: 'q187',
    text: "What is contango?",
    options: ['Tango dance style', 'Future price higher than spot', 'Contact trading', 'Continuous trading'],
    correctAnswer: "Future price higher than spot"
  },
  {
    id: 'q188',
    text: "What is backwardation?",
    options: ['Moving backward', 'Spot price higher than future', 'Reverse trading', 'Backward movement'],
    correctAnswer: "Spot price higher than future"
  },
  {
    id: 'q189',
    text: "What is funding rate?",
    options: ['Investment rate', 'Perpetual swap adjustment rate', 'Funding percentage', 'Capital rate'],
    correctAnswer: "Perpetual swap adjustment rate"
  },
  {
    id: 'q190',
    text: "What is perpetual swap?",
    options: ['Endless exchange', 'Futures without expiry', 'Permanent trading', 'Continuous swapping'],
    correctAnswer: "Futures without expiry"
  },
  {
    id: 'q191',
    text: "What is mark price?",
    options: ['Marking system', 'Fair value reference price', 'Market price', 'Marked price'],
    correctAnswer: "Fair value reference price"
  },
  {
    id: 'q192',
    text: "What is index price?",
    options: ['Reference price calculation', 'Price indexing system', 'Index measurement', 'Price indicator'],
    correctAnswer: "Reference price calculation"
  },
  {
    id: 'q193',
    text: "What is liquidation?",
    options: ['Liquid conversion', 'Forced position closure', 'Asset liquefaction', 'Clearing process'],
    correctAnswer: "Forced position closure"
  },
  {
    id: 'q194',
    text: "What is margin call?",
    options: ['Phone call about margin', 'Demand for additional funds', 'Margin notification', 'Edge call'],
    correctAnswer: "Demand for additional funds"
  },
  {
    id: 'q195',
    text: "What is cross margin?",
    options: ['Angry margin', 'Shared margin across positions', 'Crossing margins', 'Cross-platform margin'],
    correctAnswer: "Shared margin across positions"
  },
  {
    id: 'q196',
    text: "What is isolated margin?",
    options: ['Lonely margin', 'Position-specific margin', 'Separated margin', 'Individual margin'],
    correctAnswer: "Position-specific margin"
  },
  {
    id: 'q197',
    text: "What is leverage ratio?",
    options: ['Lever measurement', 'Borrowed funds to own funds ratio', 'Leverage calculation', 'Ratio of leverage'],
    correctAnswer: "Borrowed funds to own funds ratio"
  },
  {
    id: 'q198',
    text: "What is margin ratio?",
    options: ['Edge percentage', 'Equity to position value ratio', 'Margin calculation', 'Border ratio'],
    correctAnswer: "Equity to position value ratio"
  },
  {
    id: 'q199',
    text: "What is unrealized PnL?",
    options: ['Unreal profit/loss', 'Potential profit/loss on open positions', 'Unrealized potential', 'Unrecognized profit/loss'],
    correctAnswer: "Potential profit/loss on open positions"
  },
  {
    id: 'q200',
    text: "What is realized PnL?",
    options: ['Real profit/loss', 'Actual profit/loss from closed positions', 'Realized potential', 'Recognized profit/loss'],
    correctAnswer: "Actual profit/loss from closed positions"
  },
  {
    id: 'q201',
    text: "What is the optimal hedge ratio using beta in forex pairs?",
    options: ['1:1 always', 'Based on correlation coefficient', 'Negative correlation value', 'Standard deviation ratio'],
    correctAnswer: "Based on correlation coefficient"
  },
  {
    id: 'q202',
    text: "What is the Ethereum 2.0 beacon chain's role?",
    options: ['Navigation system', 'Proof-of-stake coordination layer', 'Transaction processing', 'Smart contract execution'],
    correctAnswer: "Proof-of-stake coordination layer"
  },
  {
    id: 'q203',
    text: "What is MEV (Maximal Extractable Value) in Ethereum?",
    options: ['Maximum Ethereum Value', 'Profit from transaction ordering', 'Mining Efficiency Value', 'Market Exchange Value'],
    correctAnswer: "Profit from transaction ordering"
  },
  {
    id: 'q204',
    text: "How does EIP-1559 change Ethereum's fee structure?",
    options: ['Fixed fees', 'Base fee + priority fee model', 'No fees', 'Reduced fees only'],
    correctAnswer: "Base fee + priority fee model"
  },
  {
    id: 'q205',
    text: "What is the purpose of Ethereum's difficulty bomb?",
    options: ['Attack mechanism', 'Encourage transition to PoS', 'Increase mining difficulty', 'Network security'],
    correctAnswer: "Encourage transition to PoS"
  },
  {
    id: 'q206',
    text: "What is a Directed Acyclic Graph (DAG) in blockchain?",
    options: ['Graph theory application', 'Alternative to linear blockchain', 'Data structure', 'Network topology'],
    correctAnswer: "Alternative to linear blockchain"
  },
  {
    id: 'q207',
    text: "What is the CAP theorem in distributed systems?",
    options: ['Consistency, Availability, Partition tolerance', 'Centralization, Access, Performance', 'Capacity, Availability, Processing', 'Control, Authority, Permission'],
    correctAnswer: "Consistency, Availability, Partition tolerance"
  },
  {
    id: 'q208',
    text: "What is Byzantine Fault Tolerance (BFT)?",
    options: ['Byzantine empire defense', 'System tolerance to malicious actors', 'Fault detection system', 'Error correction mechanism'],
    correctAnswer: "System tolerance to malicious actors"
  },
  {
    id: 'q209',
    text: "What is Practical Byzantine Fault Tolerance (pBFT)?",
    options: ['Practical Byzantine system', 'Optimized BFT consensus algorithm', 'Byzantine fault practice', 'Practical fault tolerance'],
    correctAnswer: "Optimized BFT consensus algorithm"
  },
  {
    id: 'q210',
    text: "What is the FLP impossibility result?",
    options: ['Failure, Loss, Prevention', 'Consensus impossibility in asynchronous systems', 'Fischer, Lynch, Paterson theorem', 'Both b and c'],
    correctAnswer: "Both b and c"
  },
  {
    id: 'q211',
    text: "What is eventual consistency?",
    options: ['Future consistency', 'System reaches consistency over time', 'Final consistency', 'Consistent eventually'],
    correctAnswer: "System reaches consistency over time"
  },
  {
    id: 'q212',
    text: "What is strong consistency?",
    options: ['Powerful consistency', 'Immediate consistency across all nodes', 'Forceful consistency', 'Consistent strength'],
    correctAnswer: "Immediate consistency across all nodes"
  },
  {
    id: 'q213',
    text: "What is the double-spending problem?",
    options: ['Spending twice the amount', 'Using same digital money multiple times', 'Double transaction fees', 'Duplicate spending records'],
    correctAnswer: "Using same digital money multiple times"
  },
  {
    id: 'q214',
    text: "How does Bitcoin solve double-spending?",
    options: ['Trusted third party', 'Distributed consensus and longest chain', 'Central authority', 'Digital signatures only'],
    correctAnswer: "Distributed consensus and longest chain"
  },
  {
    id: 'q215',
    text: "What is a 51% attack?",
    options: ['51% discount attack', 'Majority hash power attack', '51% price manipulation', 'Majority voting attack'],
    correctAnswer: "Majority hash power attack"
  },
  {
    id: 'q216',
    text: "What is selfish mining?",
    options: ['Greedy mining behavior', 'Strategic mining for unfair advantage', 'Solo mining', 'Private mining'],
    correctAnswer: "Strategic mining for unfair advantage"
  },
  {
    id: 'q217',
    text: "What is eclipse attack?",
    options: ['Solar eclipse simulation', 'Isolating node from network', 'Blocking sunlight', 'Shadowing attack'],
    correctAnswer: "Isolating node from network"
  },
  {
    id: 'q218',
    text: "What is Sybil attack?",
    options: ['Fictional character attack', 'Creating multiple fake identities', 'Sister attack', 'Sibling rivalry attack'],
    correctAnswer: "Creating multiple fake identities"
  },
  {
    id: 'q219',
    text: "What is a grinding attack?",
    options: ['Physical grinding', 'Manipulating randomness in PoS', 'Continuous attack', 'Grinding mechanism'],
    correctAnswer: "Manipulating randomness in PoS"
  },
  {
    id: 'q220',
    text: "What is nothing-at-stake problem?",
    options: ['No stakes involved', 'Validators voting on multiple chains', 'Zero stake problem', 'Stakeless system'],
    correctAnswer: "Validators voting on multiple chains"
  },
  {
    id: 'q221',
    text: "What is long-range attack?",
    options: ['Long-distance attack', 'Rewriting blockchain history from genesis', 'Extended attack duration', 'Far-reaching attack'],
    correctAnswer: "Rewriting blockchain history from genesis"
  },
  {
    id: 'q222',
    text: "What is weak subjectivity?",
    options: ['Personal weakness', 'Reliance on recent checkpoints', 'Subjective weakness', 'Weak decision making'],
    correctAnswer: "Reliance on recent checkpoints"
  },
  {
    id: 'q223',
    text: "What is social recovery in wallets?",
    options: ['Social media recovery', 'Multi-party wallet recovery mechanism', 'Community recovery', 'Social network recovery'],
    correctAnswer: "Multi-party wallet recovery mechanism"
  },
  {
    id: 'q224',
    text: "What is threshold signature?",
    options: ['Minimum signature', 'Multi-party signature scheme', 'Signature limit', 'Entry signature'],
    correctAnswer: "Multi-party signature scheme"
  },
  {
    id: 'q225',
    text: "What is multi-party computation (MPC)?",
    options: ['Multiple computer processing', 'Joint computation without revealing inputs', 'Party computing', 'Collaborative computing'],
    correctAnswer: "Joint computation without revealing inputs"
  },
  {
    id: 'q226',
    text: "What is homomorphic encryption?",
    options: ['Same-shape encryption', 'Computation on encrypted data', 'Similar encryption', 'Matching encryption'],
    correctAnswer: "Computation on encrypted data"
  },
  {
    id: 'q227',
    text: "What is differential privacy?",
    options: ['Different privacy levels', 'Privacy-preserving data analysis', 'Varied privacy', 'Distinct privacy'],
    correctAnswer: "Privacy-preserving data analysis"
  },
  {
    id: 'q228',
    text: "What is a commitment scheme?",
    options: ['Commitment ceremony', 'Cryptographic binding and hiding', 'Promise system', 'Dedication scheme'],
    correctAnswer: "Cryptographic binding and hiding"
  },
  {
    id: 'q229',
    text: "What is a Pedersen commitment?",
    options: ['Person\'s commitment', 'Cryptographic commitment scheme', 'Personal dedication', 'Individual commitment'],
    correctAnswer: "Cryptographic commitment scheme"
  },
  {
    id: 'q230',
    text: "What is verifiable delay function (VDF)?",
    options: ['Verification delay', 'Provably time-consuming computation', 'Delayed verification', 'Function delay verification'],
    correctAnswer: "Provably time-consuming computation"
  },
  {
    id: 'q231',
    text: "What is a verifiable random function (VRF)?",
    options: ['Verified randomness', 'Pseudorandom function with proof', 'Random verification', 'Variable random function'],
    correctAnswer: "Pseudorandom function with proof"
  },
  {
    id: 'q232',
    text: "What is RANDAO in Ethereum 2.0?",
    options: ['Random DAO', 'Random number generation mechanism', 'Random decentralized organization', 'Random data oracle'],
    correctAnswer: "Random number generation mechanism"
  },{
    id: 'q233',
    text: "What is slashing in Ethereum 2.0?",
    options: ['Price cutting', 'Penalty for validator misbehavior', 'Reward reduction', 'Stake cutting'],
    correctAnswer: "Penalty for validator misbehavior"
  },
  {
    id: 'q234',
    text: "What is justification in blockchain consensus?",
    options: ['Reason giving', 'Supermajority vote on checkpoint', 'Excuse making', 'Validation justification'],
    correctAnswer: "Supermajority vote on checkpoint"
  },
  {
    id: 'q235',
    text: "What is finalization in blockchain consensus?",
    options: ['Final decision', 'Irreversible checkpoint confirmation', 'Completion process', 'Ending procedure'],
    correctAnswer: "Irreversible checkpoint confirmation"
  },
  {
    id: 'q236',
    text: "What is the Casper consensus protocol?",
    options: ['Friendly ghost protocol', "Ethereum's PoS consensus mechanism", 'Ghost consensus', 'Phantom protocol'],
    correctAnswer: "Ethereum's PoS consensus mechanism"
  },
  {
    id: 'q237',
    text: "What is GHOST protocol?",
    options: ['Phantom protocol', 'Greedy Heaviest Observed Subtree', 'Ghost communication', 'Spiritual protocol'],
    correctAnswer: "Greedy Heaviest Observed Subtree"
  },
  {
    id: 'q238',
    text: "What is the uncle block reward in Ethereum?",
    options: ['Family reward', 'Partial reward for orphaned blocks', "Uncle's payment", 'Relative reward'],
    correctAnswer: "Partial reward for orphaned blocks"
  },
  {
    id: 'q239',
    text: "What is state rent in Ethereum?",
    options: ['Property rental', 'Fee for state storage over time', 'Government rent', 'Condition rental'],
    correctAnswer: "Fee for state storage over time"
  },
  {
    id: 'q240',
    text: "What is the Ethereum state trie?",
    options: ['State attempt', 'Merkle Patricia tree structure', 'Trial state', 'State trial'],
    correctAnswer: "Merkle Patricia tree structure"
  },
  {
    id: 'q241',
    text: "What is a Patricia tree?",
    options: ["Person's tree", 'Radix tree variant', "Patricia's tree", 'Named tree structure'],
    correctAnswer: "Radix tree variant"
  },
  {
    id: 'q242',
    text: "What is the Merkle-Patricia tree?",
    options: ['Combined tree structure', "Ethereum's state storage structure", 'Merged tree', 'Patricia-Merkle tree'],
    correctAnswer: "Ethereum's state storage structure"
  },
  {
    id: 'q243',
    text: "What is the World State in Ethereum?",
    options: ['Global condition', 'Mapping of addresses to account states', 'World condition', 'Global state'],
    correctAnswer: "Mapping of addresses to account states"
  },
  {
    id: 'q244',
    text: "What is storage rent?",
    options: ['Warehouse rental', 'Cost for blockchain state storage', 'Storage fee', 'Data rental'],
    correctAnswer: "Cost for blockchain state storage"
  },
  {
    id: 'q245',
    text: "What is state bloat?",
    options: ['Inflated condition', 'Excessive blockchain state growth', 'State swelling', 'Bloated state'],
    correctAnswer: "Excessive blockchain state growth"
  },
  {
    id: 'q246',
    text: "What is stateless verification?",
    options: ['No state verification', 'Verification without full state', 'Stateless checking', 'Verification without condition'],
    correctAnswer: "Verification without full state"
  },
  {
    id: 'q247',
    text: "What is a witness in blockchain?",
    options: ['Court witness', 'Proof of state transitions', 'Observer', 'Testimony provider'],
    correctAnswer: "Proof of state transitions"
  },
  {
    id: 'q248',
    text: "What is the eWASM?",
    options: ['Electronic washing', 'Ethereum WebAssembly', 'Enhanced WASM', 'Ethereum Web Application'],
    correctAnswer: "Ethereum WebAssembly"
  },
  {
    id: 'q249',
    text: "What is WebAssembly (WASM)?",
    options: ['Web assembly language', 'Binary instruction format', 'Website assembly', 'Web application system'],
    correctAnswer: "Binary instruction format"
  },
  {
    id: 'q250',
    text: "What is cross-shard communication?",
    options: ['Cross-fragment communication', 'Communication between blockchain shards', 'Shared communication', 'Shard interaction'],
    correctAnswer: "Communication between blockchain shards"
  },
  {
    id: 'q251',
    text: "What is the Ethereum 2.0 shard chain?",
    options: ['Chain of shards', 'Parallel processing chain', 'Fragmented chain', 'Shared chain'],
    correctAnswer: "Parallel processing chain"
  },
  {
    id: 'q252',
    text: "What is a fisherman node?",
    options: ['Fishing node', 'Fraud detection node', 'Sea node', 'Ocean node'],
    correctAnswer: "Fraud detection node"
  },
  {
    id: 'q253',
    text: "What is optimistic rollup?",
    options: ['Positive rollup', 'Fraud-proof based scaling', 'Hopeful rollup', 'Optimized rollup'],
    correctAnswer: "Fraud-proof based scaling"
  },
  {
    id: 'q254',
    text: "What is ZK-rollup?",
    options: ['Zero-knowledge rollup', 'Zero-key rollup', 'Zipped rollup', 'Zone rollup'],
    correctAnswer: "Zero-knowledge rollup"
  },
  {
    id: 'q255',
    text: "What is a fraud proof?",
    options: ['Fraud evidence', 'Proof of incorrect computation', 'Anti-fraud mechanism', 'Fraud prevention'],
    correctAnswer: "Proof of incorrect computation"
  },
  {
    id: 'q256',
    text: "What is a validity proof?",
    options: ['Valid evidence', 'Proof of correct computation', 'Validation proof', 'Verification proof'],
    correctAnswer: "Proof of correct computation"
  },
  {
    id: 'q257',
    text: "What is the challenge period?",
    options: ['Difficult time', 'Time to dispute transactions', 'Challenge duration', 'Contest period'],
    correctAnswer: "Time to dispute transactions"
  },
  {
    id: 'q258',
    text: "What is bonded stake?",
    options: ['Tied stake', 'Collateral for validator behavior', 'Bonded investment', 'Connected stake'],
    correctAnswer: "Collateral for validator behavior"
  },
  {
    id: 'q259',
    text: "What is economic security?",
    options: ['Financial safety', 'Cost of attacking exceeds benefit', 'Economic protection', 'Monetary security'],
    correctAnswer: "Cost of attacking exceeds benefit"
  },
  {
    id: 'q260',
    text: "What is cryptoeconomics?",
    options: ['Crypto economics', 'Incentive design using cryptography', 'Cryptocurrency economics', 'Economic cryptography'],
    correctAnswer: "Incentive design using cryptography"
  },
  {
    id: 'q261',
    text: "What is mechanism design?",
    options: ['Machine design', 'Economic system design for desired outcomes', 'Mechanical design', 'System mechanism'],
    correctAnswer: "Economic system design for desired outcomes"
  },
  {
    id: 'q262',
    text: "What is game theory in blockchain?",
    options: ['Gaming theory', 'Strategic interaction analysis', 'Game development theory', 'Playing theory'],
    correctAnswer: "Strategic interaction analysis"
  },
  {
    id: 'q263',
    text: "What is Nash equilibrium?",
    options: ['Balance point', 'Stable strategy profile', 'Nash balance', 'Equilibrium state'],
    correctAnswer: "Stable strategy profile"
  },
  {
    id: 'q264',
    text: "What is dominant strategy?",
    options: ['Winning strategy', 'Best strategy regardless of others', 'Controlling strategy', 'Primary strategy'],
    correctAnswer: "Best strategy regardless of others"
  },
  {
    id: 'q265',
    text: "What is prisoner's dilemma in blockchain?",
    options: ['Prison problem', 'Individual vs collective rationality', 'Prisoner situation', 'Dilemma problem'],
    correctAnswer: "Individual vs collective rationality"
  },
  {
    id: 'q266',
    text: "What is coordination game?",
    options: ['Organized game', 'Players benefit from same action', 'Coordinated gaming', 'Team game'],
    correctAnswer: "Players benefit from same action"
  },
  {
    id: 'q267',
    text: "What is the free rider problem?",
    options: ['Free transportation', 'Benefiting without contributing', 'Rider problem', 'Free benefit issue'],
    correctAnswer: "Benefiting without contributing"
  },
  {
    id: 'q268',
    text: "What is the tragedy of commons?",
    options: ['Common tragedy', 'Overuse of shared resources', 'Tragic commons', 'Shared tragedy'],
    correctAnswer: "Overuse of shared resources"
  },
  {
    id: 'q269',
    text: "What is Schelling point?",
    options: ['Schelling location', 'Natural focal point for coordination', 'Point of focus', 'Coordination point'],
    correctAnswer: "Natural focal point for coordination"
  },
  {
    id: 'q270',
    text: "What is time preference in economics?",
    options: ['Time choice', 'Present vs future value preference', 'Preferred time', 'Time selection'],
    correctAnswer: "Present vs future value preference"
  },
  {
    id: 'q271',
    text: "What is discount rate?",
    options: ['Reduced rate', 'Present value calculation rate', 'Sale rate', 'Lower rate'],
    correctAnswer: "Present value calculation rate"
  },
  {
    id: 'q272',
    text: "What is net present value (NPV)?",
    options: ['Current net value', 'Present value minus investment', 'Net current value', 'Present net worth'],
    correctAnswer: "Present value minus investment"
  },
  {
    id: 'q273',
    text: "What is opportunity cost?",
    options: ['Business opportunity', 'Value of best alternative foregone', 'Cost of opportunity', 'Chance cost'],
    correctAnswer: "Value of best alternative foregone"
  },
  {
    id: 'q274',
    text: "What is marginal utility?",
    options: ['Edge usefulness', 'Additional satisfaction from one more unit', 'Border utility', 'Marginal usefulness'],
    correctAnswer: "Additional satisfaction from one more unit"
  },
  {
    id: 'q275',
    text: "What is diminishing marginal utility?",
    options: ['Reducing edge benefit', 'Decreasing additional satisfaction', 'Falling marginal benefit', 'Lessening utility'],
    correctAnswer: "Decreasing additional satisfaction"
  },
  {
    id: 'q276',
    text: "What is price elasticity of demand?",
    options: ['Flexible pricing', 'Demand responsiveness to price changes', 'Price flexibility', 'Elastic demand'],
    correctAnswer: "Demand responsiveness to price changes"
  },
  {
    id: 'q277',
    text: "What is network effect?",
    options: ['Internet effect', 'Value increases with more users', 'Networking result', 'Connection effect'],
    correctAnswer: "Value increases with more users"
  },
  {
    id: 'q278',
    text: "What is Metcalfe's Law?",
    options: ['Legal principle', 'Network value proportional to users squared', "Metcalfe's rule", 'Network law'],
    correctAnswer: "Network value proportional to users squared"
  },
  {
    id: 'q279',
    text: "What is Gresham's Law?",
    options: ['Legal rule', 'Bad money drives out good', "Gresham's principle", 'Money law'],
    correctAnswer: "Bad money drives out good"
  },
  {
    id: 'q280',
    text: "What is the Cantillon effect?",
    options: ['French effect', 'Unequal impact of money creation', 'Cantillon impact', 'Economic effect'],
    correctAnswer: "Unequal impact of money creation"
  },
  {
    id: 'q281',
    text: "What is seigniorage?",
    options: ['Feudal tax', 'Profit from money creation', 'Royal privilege', 'Government profit'],
    correctAnswer: "Profit from money creation"
  },
  {
    id: 'q282',
    text: "What is inflation?",
    options: ['Air filling', 'General price level increase', 'Expansion', 'Growth'],
    correctAnswer: "General price level increase"
  },
  {
    id: 'q283',
    text: "What is deflation?",
    options: ['Air removal', 'General price level decrease', 'Contraction', 'Reduction'],
    correctAnswer: "General price level decrease"
  },
  {
    id: 'q284',
    text: "What is hyperinflation?",
    options: ['Super inflation', 'Extremely rapid inflation', 'High inflation', 'Maximum inflation'],
    correctAnswer: "Extremely rapid inflation"
  },
  {
    id: 'q285',
    text: "What is monetary policy?",
    options: ['Money rules', 'Central bank money supply control', 'Currency policy', 'Financial policy'],
    correctAnswer: "Central bank money supply control"
  },
  {
    id: 'q286',
    text: "What is quantitative easing?",
    options: ['Quantity reduction', 'Large-scale asset purchases', 'Easy quantity', 'Simplified quantification'],
    correctAnswer: "Large-scale asset purchases"
  },
  {
    id: 'q287',
    text: "What is the velocity of money?",
    options: ['Money speed', 'Rate of money circulation', 'Currency velocity', 'Money movement'],
    correctAnswer: "Rate of money circulation"
  },
  {
    id: 'q288',
    text: "What is the quantity theory of money?",
    options: ['Money amount theory', 'MV = PQ relationship', 'Quantity principle', 'Money theory'],
    correctAnswer: "MV = PQ relationship"
  },
  {
    id: 'q289',
    text: "What is M0 money supply?",
    options: ['Zero money', 'Physical currency and reserves', 'Minimum money', 'Base money'],
    correctAnswer: "Physical currency and reserves"
  },
  {
    id: 'q290',
    text: "What is M1 money supply?",
    options: ['First money', 'M0 + demand deposits', 'Market 1 supply', 'Monetary 1 supply'],
    correctAnswer: "M0 + demand deposits"
  }
];