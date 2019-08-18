const main = (input) => {
    input = input.split('\n');
    const As = input[1].split(' ').map((A) => Number(A));

    let reverseAs = 0;
    for (const A of As) {
        const reverseA = 1 / A;
        reverseAs += reverseA;
    }

    const ans = 1 / reverseAs;
    console.log(ans);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("../input.txt", "utf8"));