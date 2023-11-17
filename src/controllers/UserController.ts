import { Request, Response } from "express";
import { User } from "../models/User";

export class UserController {
    static async getUsers(req: Request, res: Response) {
        try {
            res.json({
                success: true,
                message: 'get all records',
                data: await User.all()
            });
        } catch (error) {
            res.json({
                success: false,
                message: 'an error has been occured',
                data: await error
            });
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            res.json({
                success: true,
                message: 'get specific record',
                data: await User.findById(req.params.id),
            });
        } catch (error) {
            res.json({
                success: false,
                message: 'an error has been occured',
                data: await error,
            });
        }
    }
}