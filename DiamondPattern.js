const DIAMOND_SIZE = 5;

for (let i = 1; i <= 2 * DIAMOND_SIZE - 1; i++) {

    let row = i <= DIAMOND_SIZE ? i : 2 * DIAMOND_SIZE - i;
    let line = "";

    for (let j = row; j < DIAMOND_SIZE; j++) {
        line += " ";
    }

    line += "*";

    if (row > 1) {
        for (let j = 1; j <= 2 * row - 3; j++) {
            line += " ";
        }
        line += "*";
    }

    console.log(line);
}
