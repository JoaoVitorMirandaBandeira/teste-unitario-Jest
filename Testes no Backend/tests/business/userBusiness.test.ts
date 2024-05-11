/**
 * 
 * Erro de usuário não existente
 * Resposta de sucesso
 * 
 */

import e from "express"
import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from "../data/mock/UserDataMock"



describe('Testes metodo getUserById', () => {
    test("Erro de usuário não existente", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            await userBusiness.getUserById("2")
        } catch (error: any) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })
    test("Resposta de sucesso", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            jest.spyOn(UserDatabaseMock.prototype, 'getUserById');
            const user = await userBusiness.getUserById("1")

            expect(user).toEqual({
                id: "1",
                name: "Rubeus",
                email: "rubeus@rubeus",
                role: "ADMIN"
            })
            expect(UserDatabaseMock.prototype.getUserById).toHaveBeenCalledWith('1')
        } catch (error: any) {
            console.log(error)
        }
    })
})