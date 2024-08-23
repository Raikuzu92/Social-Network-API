const connection = require('../config/connection');
const { User, Thought } = require('../Models');
const { getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let applicationCheck = await connection.db.listCollections({ name: 'Reactions' }).toArray();
  if (applicationCheck.length) {
    await connection.dropCollection('Reactions');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const Thoughts = getRandomThoughts(10);

//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];

//     users.push({
//       username: "Bryce"
//       thoughts: "This is a good day"
//       email:"
    
//     });
//   }

//   await User.insertMany(users);
  await Thought.insertMany(Thoughts);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(User);
  console.table(Thought);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});