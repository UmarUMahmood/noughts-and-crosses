const { getBoard } = require("./academy")

describe("When getBoard is called", () => {
    test("We are returned with a 2D array that represents our board", () => {

        jest.spyOn(console, 'log').mockImplementation(() => { });

        const state = { board: [["nought", "nought", null], ["cross", "cross", null], [null, null, null]] }

        const expected = [["nought", "nought", null], ["cross", "cross", null], [null, null, null]]

        const actual = getBoard(state)

        expect(actual).toStrictEqual(expected)
    })
})
