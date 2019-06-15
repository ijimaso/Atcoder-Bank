const main = (input) => {
    input = input.split("\n");
    const N = Number(input[0]);
    const A = Number(input[1]);

    if (N % 500 <= A) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

main(require("fs").readFileSync("../input.txt", "utf8"));