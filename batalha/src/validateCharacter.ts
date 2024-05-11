export interface Character {
    name: string,
    life: number,
    power: number,
    seve: number
}

export const validateCharacter = (input: Character): boolean => {
    const keys = Object.keys(input)
    const results: boolean[] = keys.map((key) => {
        const value = input[key as keyof Character];
        if(typeof value === 'number' ) {
            return value > 0 ;
        }else if (typeof value === 'string'){
            return value.trim() !== '' ;
        }else{
            return true
        }
    })
    return !results.includes(false);
}