const main = (input) => {
    input = input.split("\n");
    const X = Number(input[0].split(" ")[1]);
    const Ls = input[1].split(" ").map((L) => Number(L));
    let distance = 0;
    let boundSum = 1;

    for (let i = 0; i < Ls.length; i++) {
        distance += Ls[i];
        if (distance <= X) {
            boundSum += 1;
        } else {
            break;
        }
    }
    console.log(boundSum);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));