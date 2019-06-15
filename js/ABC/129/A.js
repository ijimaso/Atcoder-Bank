const main = (input) => {
    input = input.split(" ").map(number => Number(number));
    const min = input.reduce((a, b) => a < b ? a : b);
    const max = input.reduce((a, b) => a > b ? a : b);
    let answer = min + max;
    for (const number of input) {
        if (number !== min && number !== max) {
            const medium = number;
            answer = min + medium;
        }
    }
    console.log(answer);
};

main(require("fs").readFileSync("../input.txt", "utf8"));