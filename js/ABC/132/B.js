"use strict"

const main = (input) => {
    input = input.split("\n");
    const n = Number(input[0]);
    const ps = input[1].split(" ").map(p => Number(p));
    let ans = 0;

    for (let i = 0; i < (n - 2); i++){
        const start = ps[i];
        const center = ps[i + 1];
        const end = ps[i + 2];
        if (start < center && center < end) {
            ans += 1;
        } else if (start > center && center > end) {
            ans += 1;
        }
    }
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));