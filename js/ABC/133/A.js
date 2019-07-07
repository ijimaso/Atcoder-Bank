const main = (input) => {
    input = input.split(" ");
    const N = Number(input[0]);
    const A = Number(input[1]);
    const B = Number(input[2]);

    const train = N * A;
    const taxi = B;

    if (train > taxi) {
        console.log(taxi);
    } else if (train == taxi) {
        console.log(train);
    } else if (train < taxi) {
        console.log(train);
    }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));