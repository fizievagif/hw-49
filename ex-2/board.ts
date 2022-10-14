let board: String[] = [];
let cell: Boolean = true;

for (let i = 0; i < 8; i++) {

    for (let j = 0; j < 8; j++) {

        if (j === 0) {
            cell = !cell;
        }

        if (cell) {
            board.push('██')
        } else {
            board.push('  ');
        }

        cell = !cell;
    }

    console.log(board.join(''));
    board = [];
}