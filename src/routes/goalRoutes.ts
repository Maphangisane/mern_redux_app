import express, { Router } from "express";
import { getGoals, getGoal, updateGoal, deleteGoal, createGoal } from "../controller/goalController.js";

const router: Router = express.Router();

router.get("/", getGoals);
router.post("/", createGoal);
router.get("/:id", getGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);

export default router;
