const main = (input) => {
    input = input.split("\n");
    const N = Number(input[0].split(" ")[0]);
    const K = Number(input[0].split(" ")[1]);
    const as = input[1].split(" ").map((a) => Number(a));

    let s = 0;
    let ans = 0;
    let j = 0;

    // K未満のパターン数をしゃくとり法で求める
    for (let i = 0; i < N; i++) {
        while (j < N && s + as[j] < K) {
            s += as[j];
            j += 1;
        }
        ans += (j - i);
        s -= as[i];
    }

    // 全パターン数からK未満のパターン数を引く
    ans = (N * (N + 1) / 2 - ans)
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));