const main = (input) => {
    input = input.split('\n');
    const a = Number(input[0]);
    const s = input[1];

    if (a >= 3200) {
        console.log(s);
    } else {
        console.log('red');
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));