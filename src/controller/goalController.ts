import { Request, Response, Router } from "express";

// Get all goals
export const getGoals = async (req: Request, res: Response) => {
	try {
		res.status(200).json({ message: "get all goals" });
	} catch (error) {
		res.status(500).json({ message: 'Error fetching goals', error });
	}
}

// Create goal
export const createGoal = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "create goal" });
	} catch (error) {
		res.status(500).json({ message: 'Error creating goal', error });
	}
}

// Get goal by id
export const getGoal = async (req: Request, res: Response) => {
	try {
		res.status(200).json({ message: "get goal by id" });
	} catch (error) {
		res.status(500).json({ message: 'Error fetching goal', error });
	}
}

// Update goal by id
export const updateGoal = async (req: Request, res: Response) => {
	try {
		res.status(200).json({ message: "update goal" });
	} catch (error) {
		res.status(500).json({ message: 'Error updating goal', error });
	}
}

// Delete goal by id
export const deleteGoal = async (req: Request, res: Response) => {
	try {
		res.status(200).json({ message: "delete goal" });
	} catch (error) {
		res.status(500).json({ message: 'Error deleting goal', error });
	}
}
