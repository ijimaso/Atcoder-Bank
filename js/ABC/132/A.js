"use strict"

const main = (S) => {
    let ans = false
    if (S[0] == S[1] && S[2] == S[3] && S[0] != S[2]) {
        ans = true;
    }
    if (S[0] == S[2] && S[1] == S[3] && S[0] != S[1]) {
        ans = true;
    }
    if (S[0] == S[3] && S[1] == S[2] && S[0] != S[1]) {
        ans = true;
    }

    if (ans) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

// 文字列をsortして，条件分岐
const sortMain = (input) => {
    input = input.split("");
    const S = input.sort();
    let ans = false
    if (S[0] == S[1] && S[2] == S[3] && S[0] != S[2]) {
        ans = true;
    }

    if (ans) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));
sortMain(require("fs").readFileSync("../input.txt", "utf8"));