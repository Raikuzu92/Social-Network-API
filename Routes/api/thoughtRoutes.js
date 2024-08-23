const express = require('express');
const router = express.Router();
const getThoughts = require('../../Controllers/thoughtController');
const {createThought, getAllThoughts, getThoughtById, updateThoughtById, deleteThoughtById,addReaction, removeReaction } = require('../../Controllers/thoughtController');
// /api/thoughts
router.route('/thoughts')
  .post((req, res) => createThought(req, res)) // Create a new thought
  .get((req, res) => getAllThoughts(req, res)); // Get all thoughts

// /api/thoughts/:id
router.route('/thoughts/:id')
  .get((req, res) => getThoughtById(req, res)) // Get a single thought by ID
  .put((req, res) => updateThoughtById(req, res)) // Update a thought by ID
  .delete((req, res) => deleteThoughtById(req, res)); // Delete a thought by ID

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions')
  .post((req, res) => addReaction(req, res)); // Add a reaction to a thought

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/thoughts/:thoughtId/reactions/:reactionId')
  .delete((req, res) => removeReaction(req, res)); // Remove a reaction from a thought


module.exports = router;
