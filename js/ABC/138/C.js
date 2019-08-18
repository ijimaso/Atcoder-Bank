const main = (input) => {
    input = input.split('\n');

    const N = Number(input[0]);
    const Vs = input[1].split(' ').map((A) => Number(A));
    Vs.sort((a, b) => a - b);

    let ans = Vs[0];

    for (let i = 1; i < N; i++) {
        ans += Vs[i];
        ans /= 2;
    }

    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));