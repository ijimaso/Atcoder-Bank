const main = (input) => {
    const args = input.split(" ");
    const N = Number(args[0]);
    const Y = Number(args[1]);
    let result = "-1 -1 -1";

    for (let x = 0; x <= N; x++) {
        for (let y = 0; y <= N; y++) {
            if ((x + y) > N) {
                continue;
            }

            const z = N - x - y
            const sum = (10000 * x) + (5000 * y) + (1000 * z);
            if (sum === Y) {
                result = `${x} ${y} ${z}`;
                break;
            }
        }
    }
    console.log(result);
}

main(require("fs").readFileSync("../input.txt", "utf8"));