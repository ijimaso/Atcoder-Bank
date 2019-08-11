const main = (input) => {
    const r = ~~input;
    const ans = 3 * r * r;
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));