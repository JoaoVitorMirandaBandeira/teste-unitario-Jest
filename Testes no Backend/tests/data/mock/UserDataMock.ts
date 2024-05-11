import { USER_ROLES, User } from "../../../src/model/User";


export class UserDatabaseMock {
    public async createUser(user: User): Promise<void> { }

    public async getUserById(id: string): Promise<User | undefined> {
        if (id === '1') {
            return {
                id: '1',
                name: 'Rubeus',
                email: 'rubeus@rubeus',
                role: USER_ROLES.ADMIN
            }
        } else {
            undefined
        }
    }
}