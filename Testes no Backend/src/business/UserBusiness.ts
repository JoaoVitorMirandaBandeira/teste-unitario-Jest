import { copyFileSync } from "fs";
import { CustomError } from "../../tests/utils/CustomError";
import { UserData } from "../data/UserData";
import { User } from "../model/User";

export class UserBusiness {
    constructor(private userDatabase: UserData) { }
    public async getUserById(id: string) {
        try {
            const user = await this.userDatabase.getUserById(id);
            if (!user) {
                throw new CustomError(404, "User not found");
            }
            return user
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message);
        }
    }

    public async getAllUsers(id: string) {
        try {
            const user = await this.userDatabase.getUserById(id);
            if (!user) {
                throw new CustomError(404, "User not found");
            }
            if (user.role !== "ADMIN") {
                throw new CustomError(401, "Unauthorized");
            }
            
            const allUsers = await this.userDatabase.getAllUsers();
            return allUsers
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    public async getProfile(id: string) {
        try {
            const user = await this.userDatabase.getUserById(id);
            if (!user) {
                throw new CustomError(404, "User not found");
            }
            return user
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
}

