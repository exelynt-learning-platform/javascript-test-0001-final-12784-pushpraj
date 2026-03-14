const n = 4;

for (let i = -n; i <= n; i++) {
    let row = "";
    for (let j = -n; j <= n; j++) {
        if (Math.abs(i) + Math.abs(j) === n) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
