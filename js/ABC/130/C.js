const main = (input) => {
    input = input.split(" ");
    const W = Number(input[0]);
    const H = Number(input[1]);
    const x = Number(input[2]);
    const y = Number(input[3]);

    const min_area = (W * H) / 2;
    console.log(min_area.toFixed(6));

    const straightY = -(H / W) * x + H

    if (straightY == y) {
        console.log("1");
    } else {
        console.log("0");
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));