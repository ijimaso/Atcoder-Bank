const main = (input) => {
    input = input.split('\n');
    const a = Number(input[0]);
    const b = Number(input[1].split(' ')[0]);
    const c = Number(input[1].split(' ')[1]);
    const s = input[2];
    console.log(a + b + c, s);
};

main(require("fs").readFileSync("../input.txt", "utf8"));