import { validateCharacter, Character } from "./validateCharacter";

export const performAttack = (attacker: Character,defender: Character, validate: (character: Character) => boolean): number => {
    try {
        const validateAttack = validate(attacker);
        const validateDefense = validate(defender);
        if (!validateAttack && !validateDefense) {
            throw new Error("Invalid Character");
        }

        defender.life -= attacker.power - defender.seve;
        return defender.life;
    }catch (err: any) {
        return err.message;
    }
}

export const performAttackWithoutDependencyInversion = (attacker: Character,defender: Character): number => {
    try {
        const validateAttack = validateCharacter(attacker);
        const validateDefense = validateCharacter(defender);
        if (!validateAttack && !validateDefense) {
            throw new Error("Invalid Character");
        }

        defender.life -= attacker.power - defender.seve;
        return defender.life;
    }catch (err: any) {
        return err.message;
    }
}