const compareFunction = (a, b) => {
    return b - a;
}

const main = (input) => {
    input = input.split("\n");
    const numbers = input[1].split(" ").map((number) => Number(number));
    const sortedNumbers = numbers.sort(compareFunction);
    let pointsAliceThanBob = 0;

    for (let i = 0; i < sortedNumbers.length; i++) {
        if (i % 2 === 0) {
            pointsAliceThanBob += sortedNumbers[i];
        } else {
            pointsAliceThanBob -= sortedNumbers[i];
        }
    }
    console.log(pointsAliceThanBob);
}

main(require("fs").readFileSync("../input.txt", "utf8"));