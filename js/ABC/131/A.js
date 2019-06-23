const main = (S) => {
    if (S[0] !== S[1] && S[1] !== S[2] && S[2] !== S[3]) {
        console.log("Good");
    } else {
        console.log("Bad");
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));