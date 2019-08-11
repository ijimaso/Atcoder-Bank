const main = (input) => {
    input = input.split("");
    const a = Number(input[0]);
    const b = Number(input[1]);
    const c = Number(input[2]);

    let ans = 0;
    if (a === 1) {
        ans += 1;
    }
    if (b === 1) {
        ans += 1;
    }
    if (c === 1) {
        ans += 1;
    }

    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));