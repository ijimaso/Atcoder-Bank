const main = (input) => {
    input = input.split(" ");
    const N = Number(input[0]);
    const A = Number(input[1]);
    const B = Number(input[2]);
    let allSum = 0;
    for (let i = 1; i <= N; i++) {
        const stringNumber = String(i);
        const separatedNumbers = stringNumber.split("");
        const separatedNumbersSum = separatedNumbers.reduce((sum, separatedNumber) => {
            return sum + Number(separatedNumber);
        }, 0);
        if (separatedNumbersSum >= A && separatedNumbersSum <= B) {
            allSum += i;
        }
    }
    console.log(allSum);
};

main(require("fs").readFileSync("input.txt", "utf8"));