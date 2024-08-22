const express = require('express');
const router = express.Router();
const thoughtController = require('../../Controllers/thoughtController');

// Create a new thought
router.post('/thoughts', thoughtController.createThought);

// Get all thoughts
router.get('/thoughts', thoughtController.getAllThoughts);

// Get a single thought by ID
router.get('/thoughts/:id', thoughtController.getThoughtById);

// Update a thought by ID
router.put('/thoughts/:id', thoughtController.updateThoughtById);

// Delete a thought by ID
router.delete('/thoughts/:id', thoughtController.deleteThoughtById);

// Add a reaction to a thought
router.post('/thoughts/:thoughtId/reactions', thoughtController.addReaction);

// Remove a reaction from a thought
router.delete('/thoughts/:thoughtId/reactions/:reactionId', thoughtController.removeReaction);

module.exports = router;
