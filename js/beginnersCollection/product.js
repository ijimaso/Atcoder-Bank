const main = (input) => {
    input = input.split(" ");
    const a = Number(input[0]);
    const b = Number(input[1]);
    const product = a * b;

    if (product % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));