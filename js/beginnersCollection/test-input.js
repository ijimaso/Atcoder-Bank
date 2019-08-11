const main = (input) => {
    console.log(input);
    input = input.split("\n");
    const tmp = input[1].split(" ");
    console.log(input);
    console.log(tmp);
    const a = Number(input[0], 10);
    const b = Number(tmp[0], 10);
    const c = Number(tmp[1], 10);
    const s = input[2];
    console.log(`${a + b + c} ${s}`);
};

main(require("fs").readFileSync("../input.txt", "utf8"));
