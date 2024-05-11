export interface User{
    id: string,
    name: string,
    email: string,
    role: USER_ROLES
}

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN",
 }