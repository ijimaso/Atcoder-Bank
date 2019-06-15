const main = (input) => {
    input = input.split("\n");
    const N = input[0].split(" ")[0];
    const M = input[0].split(" ")[1];
    input.shift();
    const brokenStairs = input.map(brokenStair => brokenStair);
    console.log(N, M);
    console.log(brokenStairs);

    let procedure = 0;
    for (let i = 0; i < N; i++) {
        for (brokenStair of brokenStairs) {
            let sum;
            if (i === brokenStair) {
                sum += 2;
            } else {
                sum += 1;
            }
        }
    }
};

main(require("fs").readFileSync("../input.txt", "utf8"));