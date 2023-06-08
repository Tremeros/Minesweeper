import { emptyFieldGenerator, CellState, fieldGenerator } from "./index.ts"

const { empty, hidden, bomb } = CellState

describe('Field generator', () => {
    describe('emptyFieldGenerator test', () => {
        it('2 x 2', () => {
            expect(emptyFieldGenerator(2)).toStrictEqual([
                [empty, empty],
                [empty, empty]
            ])
        })
        it('3 x 3', () => {
            expect(emptyFieldGenerator(3)).toStrictEqual([
                [empty, empty, empty],
                [empty, empty, empty],
                [empty, empty, empty],
            ])
        })
        it('3 x 3 with closed', () => {
            expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
                [hidden, hidden, hidden],
            ])
        })
    })

    describe('Simple cases', () => {
        it('Wrong density', () => {
            const errorText = 'Probability must be between 0 and 1'
            expect(() => fieldGenerator(1, -1)).toThrow(errorText)
            expect(() => fieldGenerator(1, 2)).toThrow(errorText)
        })
        it('Smallest possible field without mine', () => {
            expect(fieldGenerator(1, 0)).toStrictEqual([[empty]])
        })
        it('Smallest possible field with mine', () => {
            expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]])
        })
        it('2 x 2 fields with mines', () => {
            expect(fieldGenerator(2, 1)).toStrictEqual([
                [bomb, bomb],
                [bomb, bomb],
            ])
        })
        it('2 x 2 field with 50% probability', () => {
           const field = fieldGenerator(2, 0.5)
           const flatField = field.flat()

           console.table(field)
           console.table(flatField)

           const cellsWithBombs = flatField.filter((cell) => cell === bomb)
           const emptyCells = flatField.filter((cell) => cell === empty)

           expect(cellsWithBombs).toHaveLength(2)
           expect(emptyCells).toHaveLength(2)
        })
    })
})