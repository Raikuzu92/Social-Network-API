const express = require('express');
const router = express.Router();
const {getThoughts} = require('../../Controllers/thoughtController');

// /api/thoughts
router.route('/thoughts')
  .post((req, res) => getThoughts.createThought(req, res)) // Create a new thought
  .get((req, res) => getThoughts.getAllThoughts(req, res)); // Get all thoughts

// /api/thoughts/:id
router.route('/thoughts/:id')
  .get((req, res) => getThoughts.getThoughtById(req, res)) // Get a single thought by ID
  .put((req, res) => getThoughts.updateThoughtById(req, res)) // Update a thought by ID
  .delete((req, res) => getThoughts.deleteThoughtById(req, res)); // Delete a thought by ID

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions')
  .post((req, res) => getThoughts.addReaction(req, res)); // Add a reaction to a thought

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete((req, res) => getThoughts.removeReaction(req, res)); // Remove a reaction from a thought


module.exports = router;
