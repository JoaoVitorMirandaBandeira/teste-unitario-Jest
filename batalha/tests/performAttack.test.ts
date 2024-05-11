import { performAttack } from "../src/performAttack";

describe("Teste unitario performAttack", () => {
    test("Dados de entrada invalidos",() => {
        const mockValidator = jest.fn(() => {
            return false;
        });

        const mockAttacker = {
            name: "",
            life: 100,
            power: 100,
            seve: 100
        }

        const mockDefender = {
            name: "Nome",
            life: 100,
            power: 100,
            seve: 100
        }
        try{
            performAttack(mockAttacker,mockDefender,mockValidator);
        }catch(err: any) {
            expect(err.message).toBe("Invalid Character");
        }
        let count = 0;
        let returnValue = false;
        mockValidator.mock.results.forEach((result) => {
            if (result.value === returnValue) {
                count++;
            }
        });
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledTimes(2);
        expect(count).toBe(2);
    })

    test("Defensor perdendo vida",() => {
        const mockValidator = jest.fn(() => {
            return true;
        });

        const mockAttacker = {
            name: "Nome",
            life: 100,
            power: 300,
            seve: 100
        }

        const mockDefender = {
            name: "Nome",
            life: 300,
            power: 100,
            seve: 100
        }
        mockDefender.life = performAttack(mockAttacker,mockDefender,mockValidator);
        let count = 0;
        let returnValue = true;
        mockValidator.mock.results.forEach((result) => {
            if (result.value === returnValue) {
                count++;
            }
        });
        expect(mockValidator).toHaveBeenCalled();
        expect(mockValidator).toHaveBeenCalledTimes(2);
        expect(count).toBe(2);
        expect(mockDefender.life).toBe(100);
    })
})