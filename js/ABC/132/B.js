"use strict"

const compare = (sum, ps, i) => {
    const start = ps[i];
    const center = ps[i + 1];
    const end = ps[i + 2];
    if (start < center && center < end) {
        sum += 1;
    } else if (start > center && center > end) {
        sum += 1;
    }
    return sum;
};

const main = (input) => {
    input = input.split("\n");
    const ps = input[1].split(" ").map(p => Number(p));
    let sum = 0;
    for (let i = 0; i < ps.length; i++) {
        sum = compare(sum,ps,i);
    }
    console.log(sum);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));