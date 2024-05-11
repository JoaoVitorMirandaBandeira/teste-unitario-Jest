import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    private userBusiness: UserBusiness
    constructor(userBusiness: UserBusiness) {
        this.userBusiness = userBusiness
    }
    async index(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const user = this.userBusiness.getUserById(id);
            res.status(200).send(user);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    async all(req: Request, res: Response) {
        try{
            const id = req.headers.authorization as string;
            const user = this.userBusiness.getAllUsers(id);
            res.status(200).send(user);
        }catch (error: any) {
            throw new Error(error.message);
        }
    }

    async profile(req: Request, res: Response) {
        try{
            const id = req.headers.authorization as string;
            const user = this.userBusiness.getProfile(id);
            res.status(200).send(user);
        }catch (error: any) {
            throw new Error(error.message);
        }
    }

}