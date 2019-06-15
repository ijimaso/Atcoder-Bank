const main = (input) => {
    input = input.split(" ");

    const r = input[0];
    const g = input[1];
    const b = input[2];

    const rgb = Number(r + g + b);

    if (rgb % 4 === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
};

main(require("fs").readFileSync("../input.txt", "utf8"));