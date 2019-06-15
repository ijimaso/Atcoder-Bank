const main = (input) => {
    const S = input;
    console.log(S.replace("7", "8"))
};

main(require("fs").readFileSync("../input.txt","utf8"));