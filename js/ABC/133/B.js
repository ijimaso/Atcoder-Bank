const main = (input) => {
    input = input.split("\n");
    const N = Number(input[0].split(" ")[0]);
    const D = Number(input[0].split(" ")[1]);
    input.shift();
    const arrayXs = [];
    for (let i = 0; i < input.length; i++) {
        const Xs = input[i].split(" ");
        const arrayX = [];
        for (let j = 0; j < Xs.length; j++) {
            const X = Number(Xs[j]);
            arrayX.push(X);
        }
        arrayXs.push(arrayX);
    }
    let ans = 0;
    for (let i = 0; i < arrayXs.length; i++) {
        for (let j = 0; j < arrayXs.length; j++) {
            if (i == j || i > j) {
                continue;
            }
            let sum = 0;
            for (let k = 0; k < D; k++){
                sum += (arrayXs[i][k] - arrayXs[j][k]) ** 2;
            }
            sum = Math.sqrt(sum);
            if (Number.isInteger(sum)) {
                ans += 1;
            }
        }
    }
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));