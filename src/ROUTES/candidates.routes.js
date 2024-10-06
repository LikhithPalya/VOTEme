import express from "express";
import {
    newCandidate,
    updatedCandidateData,
    deleteCandidate,
    Vote,
    countVotes,
    getCandidatesData
} from "../CONTROLLERS/candidate.controller.js"; 
import { jwtAuthMiddleware } from "../MIDDLEWARE/jwtAuth.midddleware.js";

const router = express.Router();

// Create a new candidate (admin only)
router.post('/addnew-candidate', jwtAuthMiddleware, newCandidate);

// Update candidate data (admin only)
router.put('/:candidateID', jwtAuthMiddleware, updatedCandidateData);

// Delete a candidate (admin only)
router.delete('/:candidateID', jwtAuthMiddleware, deleteCandidate);

// Vote for a candidate (user only)
router.post('/vote/:candidateID', jwtAuthMiddleware, Vote);

// Count votes for all candidates
router.get('/vote/count', countVotes);

// Get list of all candidates (name and party only)
router.get('/', getCandidatesData);

export default router;
