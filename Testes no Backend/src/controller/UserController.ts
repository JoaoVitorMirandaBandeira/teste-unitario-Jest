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

}