const DIAMOND_SIZE = 4;

for (let i = -DIAMOND_SIZE; i <= DIAMOND_SIZE; i++) {
    let row = "";
    for (let j = -DIAMOND_SIZE; j <= DIAMOND_SIZE; j++) {
        if (Math.abs(i) + Math.abs(j) === DIAMOND_SIZE) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
