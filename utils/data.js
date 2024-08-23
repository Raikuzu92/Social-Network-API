const { getThoughts } = require("../Controllers/thoughtController");



const names = [
    'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan',
    'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz',
    'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Smith', 'Jones', 'Coollastname', 'enter_name_here', 'Ze', 'Zechariah',
    'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 'Zerah', 'Zhen', 'Zhi',
    'Zhong', 'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair',
    'Zoubaeir', 'Zubair', 'Zubayr', 'Zuriel', 'Xander', 'Jared', 'Grace', 'Alex', 'Mark', 'Tamar', 'Farish',
    'Sarah', 'Nathaniel', 'Parker'
  ];
  
  const thoughts = [
    "Today was a productive day! I managed to finish the project ahead of schedule.",
    "Feeling grateful for the support of friends and family. They make everything better.",
    "Just started reading a new book and it's incredibly captivating. Can't wait to dive deeper.",
    "The weather today is perfect for a hike. Nature always helps me clear my mind.",
    "Trying out a new recipe for dinner tonight. Hopefully, it turns out as delicious as it looks!",
    "Had an inspiring conversation with a mentor today. Their advice is invaluable.",
    "Feeling motivated to start a new fitness routine. Time to get back in shape!",
    "I can't believe how much I've learned in the past month. Growth feels amazing.",
    "Listening to some relaxing music and taking a break. Self-care is so important.",
    "Completed a challenging puzzle today. It was a great mental exercise!",
    "Attended a fascinating seminar on technology trends. The future looks exciting.",
    "Just watched a great movie. The storyline was gripping and the acting was superb.",
    "Spent some quality time with family today. It reminded me how precious these moments are.",
    "Starting a new hobby this weekend. Exploring new interests is always exciting.",
    "Reflecting on my goals and aspirations. Ready to set new milestones for the coming year."
  ];
  
  // Function to get a random item from an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Function to generate random thoughts
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomArrItem(names),
        createdAt: new Date(),
        reactions: [] // Placeholder for reactions if needed
      });
    }
    return results;
  };
  
  // Function to generate users with thoughts
  const getUsers = (numUsers) => {
    let results = [];
    for (let i = 0; i < numUsers; i++) {
      results.push({
        username: getRandomArrItem(names),
        email: `${getRandomArrItem(names).toLowerCase()}@example.com`,
        thoughts: getRandomThoughts(3), // Generating 3 random thoughts per user
        friends: [] // Empty list for friends
      });
    }
    return results;
  };
  
  // Export the functions
  module.exports = { getRandomThoughts, };