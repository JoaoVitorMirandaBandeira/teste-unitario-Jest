import { validateCharacter } from "../src/validateCharacter";


describe("Teste unitario validateCharacter", () => {
    test("Personagem com o nome vazio", () => {
        const mock = {
            name: "",
            life: 100,
            power: 100,
            seve: 100
        }
        const result = validateCharacter(mock);
        expect(result).toBe(false)
    })
})