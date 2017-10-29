'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var pRows = 0; pRows < numberOfRows; pRows++) {
        var row = [];
        for (var pColumns = 0; pColumns < numberOfColumns; pColumns++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var pRows = 0; pRows < numberOfRows; pRows++) {
        var row = [];
        for (var pColumns = 0; pColumns < numberOfColumns; pColumns++) {
            row.push(' ');
            // the excercise asks you to run "null" instead of "' '" to make a point but is unneccessary and makes the bomb board look ugly
        }
        board.push(row);
    }
    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        /* 
        The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
        */
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }

    return board;
};

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);