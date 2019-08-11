const main = (input) => {
    input = input.split(" ");
    const N = ~~input[0];
    const D = ~~input[1];

    const half = N / 2;
    let ans = 0;

    for (let i = 0; i <= N; i++) {
        const front = i - D;
        const back = i + D;

        if (front == 1) {
            ans += 1;
            if (N - back > half) {
                ans += 1;
            }
        }

        if (back == N) {
            ans += 1;
            break;
        }
    }
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));