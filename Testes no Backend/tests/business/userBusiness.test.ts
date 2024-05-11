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

describe('Testes metodo getAllUsers', () => {
    test("Resposta de sucesso", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            jest.spyOn(UserDatabaseMock.prototype, 'getAllUsers');
            const users = await userBusiness.getAllUsers("1")
            expect(users).toEqual([
                {
                    id: '1',
                    name: 'Rubeus',
                    email: 'rubeus@rubeus',
                    role: "ADMIN"
                },
                {
                    id: '2',
                    name: 'Cerberus',
                    email: 'cerberus@cerberus',
                    role: "NORMAL"
                }
            ])
            expect(UserDatabaseMock.prototype.getUserById).toHaveBeenCalledWith('1')
        } catch (error: any) {
            console.log(error)
        }
    })

    test("Erro de usuário não tem permissão", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            await userBusiness.getAllUsers("3")
        } catch (error: any) {
            expect(error.message).toBe("Unauthorized")
            expect(error.statusCode).toBe(401)
        }
    })

    test("Erro de usuário não existente", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            await userBusiness.getAllUsers("2")
        } catch (error: any) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })
})

describe('Testes metodo getProfile', () => {
    test("Resposta de sucesso", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            jest.spyOn(UserDatabaseMock.prototype, 'getUserById');
            const profile = await userBusiness.getProfile("1")
            expect(profile).toEqual({
                id: '1',
                name: 'Rubeus',
                email: 'rubeus@rubeus',
                role: "ADMIN"
            })
            expect(UserDatabaseMock.prototype.getUserById).toHaveBeenCalledWith('1')
        } catch (error: any) {
            console.log(error)
        }
    })

    test("Erro de usuário não existente", async () => {
        expect.assertions
        try {
            const userBusiness = new UserBusiness(
                new UserDatabaseMock()
            )
            await userBusiness.getProfile("2")
        }catch (error: any) {
            expect(error.message).toBe("User not found")
            expect(error.statusCode).toBe(404)
        }
    })
})