// 二つの数の最大公約数(greatest common divisor)を求める
const gcd = (C, D) => {
    return D ? gcd(D, C % D) : C;
};

// 二つの数の最小公倍数(least common multiple)を求める
const lcm = (C, D) => {
    return Math.floor((C * D) / gcd(C, D));
};

// C,Dで割り切れる数を求め，全体の数から引く
const f = (N, C, D) => {
    let sum = N;
    sum -= Math.floor(N / C);
    sum -= Math.floor(N / D);
    sum += Math.floor(N / lcm(C, D));
    return sum;
};

const main = (input) => {
    input = input.split(" ");
    const A = Number(input[0]);
    const B = Number(input[1]);
    const C = Number(input[2]);
    const D = Number(input[3]);

    const ans = f(B, C, D) - f(A - 1, C, D);
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));