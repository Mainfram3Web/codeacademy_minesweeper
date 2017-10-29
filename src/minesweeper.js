const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
    for (let pRows = 0; pRows < numberOfRows; pRows++) {
        let row = [];
        for (let pColumns = 0; pColumns < numberOfColumns; pColumns++) {
            row.push(' ');    
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
    for (let pRows = 0; pRows < numberOfRows; pRows++) {
        let row = [];
        for (let pColumns = 0; pColumns < numberOfColumns; pColumns++) {
            row.push(' '); 
            // the excercise asks you to run "null" instead of "' '" to make a point but is unneccessary and makes the bomb board look ugly
        }
        board.push(row);
    }
 let numberOfBombsPlaced = 0;    
    while (numberOfBombsPlaced < numberOfBombs) {
        /* 
        The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
        */
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
    }

    return board;
};

const printBoard = (board) => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);