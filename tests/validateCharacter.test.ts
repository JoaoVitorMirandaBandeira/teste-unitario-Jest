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

    test("Personagem com a vida igual a zero",() => {
        const mock = {
            name: "<NAME>",
            life: 0,
            power: 100,
            seve: 100
        }
        const result = validateCharacter(mock);
        expect(result).toBe(false)
    })

    test("Personagem com a forca igual a zero",() => {
        const mock = {
            name: "<NAME>",
            life: 100,
            power: 0,
            seve: 100
        }
        const result = validateCharacter(mock);
        expect(result).toBe(false)
    })

    test("Personagem com a defesa igual a zero",() => {
        const mock = {
            name: "<NAME>",
            life: 100,
            power: 100,
            seve: 0
        }
        const result = validateCharacter(mock);
        expect(result).toBe(false)
    })

    test("Personagem com a vida ou a força ou a defesa com um valor negativo",() => {
        const mock = {
            name: "<NAME>",
            life: -100,
            power: 100,
            seve: 100
        }
        const result = validateCharacter(mock);
        expect(result).toBe(false)
    })

    test("Personagem com as informações validas",() => {
        const mock = {
            name: "<NAME>",
            life: -100,
            power: 100,
            seve: 100
        }
        const result = validateCharacter(mock);
        expect(result).toBe(false)
    })
})