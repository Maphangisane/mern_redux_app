import { Request, Response } from "express";

// Register user
export const register = async (req: Request, res: Response) => {
	try {
		res.status(201).json({ message: "user registered successfully" });
	} catch (error) {
		res.status(500).json({ message: 'Error registering user', error });
	}
}

// Login user
export const login = async (req: Request, res: Response) => {
	try {
		res.status(200).json({ message: "user logged in successfully" });
	} catch (error) {
		res.status(500).json({ message: 'Error logging in user', error });
	}
}
