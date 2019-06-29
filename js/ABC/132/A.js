"use strict"

const main = (input) => {
    const S = input.split("");
    if (S[0] == S[1] && S[1] == S[2] && S[2] == S[3]) {
        console.log("No");
    } else if (S[0] == S[1] && S[2] == S[3]) {
        console.log("Yes");
    } else if (S[0] == S[2] && S[1] == S[3]) {
        console.log("Yes");
    } else if (S[0] == S[3] && S[1] == S[2]) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));