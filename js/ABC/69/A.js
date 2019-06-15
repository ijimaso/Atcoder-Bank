const main = (input) => {
    input = input.split("");
    const beginStr = input.shift();
    const lastStr = input.pop();
    const leftStrsLength = input.length;
    console.log(`${beginStr}${leftStrsLength}${lastStr}`);
};

main(require("fs").readFileSync("../input.txt","utf8"));