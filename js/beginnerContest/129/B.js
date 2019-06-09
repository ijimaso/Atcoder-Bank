const main = (input) => {
    input = input.split("\n");
    const weights = input[1].split(" ").map((weight) => Number(weight));
    const diffs = [];
    for (let i = 0; i < weights.length; i++) {
        const weightsBegin = weights.slice(0, i);
        const weightsEnd = weights.slice(i);
        const S1 = weightsBegin.reduce((sum, weightBegin) => sum + weightBegin, 0);
        const S2 = weightsEnd.reduce((sum, weightEnd) => sum + weightEnd, 0);
        const diff = Math.abs(S1 - S2);
        diffs.push(diff);
    }
    const minDiff = diffs.reduce((a, b) => a < b ? a : b);
    console.log(minDiff);
};

main(require("fs").readFileSync("../input.txt", "utf8"));