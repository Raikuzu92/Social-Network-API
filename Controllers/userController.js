// const { User, Thought } = require('../Models/User');

// module.exports = {
//   // Get all users
//   async getUsers(req, res) {
//     try {
//       const users = await User.find()
//         .populate('friends')
//         .populate({
//           path: 'thoughts',
//           populate: { path: 'reactions' }
//         });
//       res.json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // Get a single user by ID
//   async getSingleUser(req, res) {
//     try {
//       const user = await User.findOne({ _id: req.params.userId })
//         .populate('friends')
//         .populate({
//           path: 'thoughts',
//           populate: { path: 'reactions' }
//         });

//       if (!user) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // Create a new user
//   async createUser(req, res) {
//     try {
//       const user = await User.create(req.body);
//       res.status(201).json(user);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   },

//   // Delete a user by ID
//   async deleteUser(req, res) {
//     try {
//       const user = await User.findOneAndDelete({ _id: req.params.userId });

//       if (!user) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       // Remove the user's thoughts
//       await Thought.deleteMany({ _id: { $in: user.thoughts } });

//       // Remove the user's friends
//       await User.updateMany(
//         { friends: user._id },
//         { $pull: { friends: user._id } }
//       );

//       res.json({ message: 'User and their thoughts deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // Update a user by ID
//   async updateUser(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       )
//         .populate('friends')
//         .populate({
//           path: 'thoughts',
//           populate: { path: 'reactions' }
//         });

//       if (!user) {
//         return res.status(404).json({ message: 'No user with this id!' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // Add a friend to a user's friend list
//   async addFriend(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $addToSet: { friends: req.params.friendId } },
//         { new: true, runValidators: true }
//       )
//         .populate('friends')
//         .populate({
//           path: 'thoughts',
//           populate: { path: 'reactions' }
//         });

//       if (!user) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // Remove a friend from a user's friend list
//   async removeFriend(req, res) {
//     try {
//       const user = await User.findOneAndUpdate(
//         { _id: req.params.userId },
//         { $pull: { friends: req.params.friendId } },
//         { new: true, runValidators: true }
//       )
//         .populate('friends')
//         .populate({
//           path: 'thoughts',
//           populate: { path: 'reactions' }
//         });

//       if (!user) {
//         return res.status(404).json({ message: 'No user with that ID' });
//       }

//       res.json(user);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// };
