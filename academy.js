// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column, state) {

    console.log("takeTurn was called with row: " + row + ", column:" + column)

    board = state.board
    playerID = state.playerID
    turnCount = state.turnCount
    winner = state.winner

    if (board[row][column] === null && winner === null) {

        console.log("Placed is not occupied")

        if (playerID === 1) {

            board[row][column] = "nought"
            console.log("Placed a nought")
        } else if (playerID === -1) {
            board[row][column] = "cross"
            console.log("Placed a cross")
        } else {
            console.log("Something wrong with switching players")
        }

        turnCount += 1
        console.log("Turn has been taken")

        playerID *= -1
        console.log("Switching players...")

        state.board = board
        state.playerID = playerID
        state.turnCount = turnCount

        return state
    } else {
        console.log("Placed is occupied or winner has been called. Reset for a new game.")
        return state
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called")
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame(state) {
    console.log("resetGame was called")

    state.board = [[null, null, null], [null, null, null], [null, null, null]]
    state.turnCount = 0
    state.winner = null

    return state
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard(state) {
    console.log("getBoard was called")

    board = state.board

    return board
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
