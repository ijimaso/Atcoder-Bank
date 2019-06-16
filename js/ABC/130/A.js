const main = (input) => {
    input = input.split(" ");
    const X = Number(input[0]);
    const A = Number(input[1]);
    if (X < A) {
        console.log(0);
    } else {
        console.log(10);
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));