const shift = (N, numbers, sum = 0) => {
    const newNumbers = [];
    for (let number of numbers) {
        number = parseInt(number, 10);
        if (number % 2 !== 0) {
            console.log(sum);
            break;
        } else {
            number /= 2;
            newNumbers.push(number);
        }
    }
    if (newNumbers.length === N) {
        sum += 1;
        shift(N, newNumbers, sum);
    }
};

const main = (input) => {
    input = input.split("\n");
    const N = parseInt(input[0], 10);
    const numbers = input[1].split(" ");
    shift(N, numbers, 0);
};

main(require("fs").readFileSync("../input.txt", "utf8"));
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
