const { getBoard, resetGame } = require("./academy")

describe("When getBoard is called", () => {
    test("We are returned with a 2D array that represents our board", () => {

        jest.spyOn(console, 'log').mockImplementation(() => { })

        const state = { board: [["nought", "nought", null], ["cross", "cross", null], [null, null, null]] }

        const expected = [["nought", "nought", null], ["cross", "cross", null], [null, null, null]]

        const actual = getBoard(state)

        expect(actual).toStrictEqual(expected)
    })
})

describe("When resetBoard is called", () => {
    test("The state variables are reset to their initial values", () => {

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
