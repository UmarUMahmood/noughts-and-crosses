const { getBoard, resetGame, takeTurn } = require("./academy")

describe("When getBoard is called", () => {
    test("We are returned with a 2D array that represents our board", () => {

        jest.spyOn(console, 'log').mockImplementation(() => { })

        const state = { board: [["nought", "nought", null], ["cross", "cross", null], [null, null, null]] }

        const expected = [["nought", "nought", null], ["cross", "cross", null], [null, null, null]]

        const actual = getBoard(state)

        expect(actual).toStrictEqual(expected)
    })
})

describe("When the reset button is clicked", () => {
    test("The state properties are reset to their initial values", () => {

        jest.spyOn(console, 'log').mockImplementation(() => { });

        const state = {
            board: [["nought", "nought", "nought"], ["cross", "cross", null], [null, null, null]],
            turnCount: 5,
            winner: "nought"
        }

        const expected = {
            board: [[null, null, null], [null, null, null], [null, null, null]],
            turnCount: 0,
            winner: null
        }

        const actual = resetGame(state)

        expect(actual).toStrictEqual(expected)
    })
})

describe("When a piece is placed", () => {
    test("Update the state if there is no winner and the selected space is empty", () => {

        const row = 0
        const column = 0
        const state = {
            board: [[null, null, null], [null, null, null], [null, null, null]],
            playerID: 1,
            turnCount: 0,
            winner: null
        }

        const expected = {
            board: [["nought", null, null], [null, null, null], [null, null, null]],
            playerID: -1,
            turnCount: 1,
            winner: null
        }

        const actual = takeTurn(row, column, state)

        expect(actual).toStrictEqual(expected)
    })
})
