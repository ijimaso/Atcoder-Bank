const main = (input) => {
    input = input.split(" ");
    const N = Number(input[0]);
    const L = Number(input[1]);

    const tastes = [];
    for (let i = 1; i <= N; i++) {
        const taste = L + i - 1;
        tastes.push(taste);
    }

    const S = tastes.reduce((s, taste) => s + taste);

    let ans = 1e9;

    for (let i = 0; i < tastes.length; i++) {
        let T = S - tastes[i];
        if (Math.abs(S - T) < Math.abs(ans - S)) {
            ans = T;
        }
    }

    console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));