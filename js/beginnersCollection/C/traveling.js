const main = (input) => {
    const args = input.split('\n');
    console.log(args);
    const N = parseInt(args[0], 10);
    console.log(N);
    const nums = args.slice(1, N + 1);
    console.log(nums);
    console.log("~~~~~~~~~");
    const isValid = nums.every((n) => {
        var ns = n.split(' ');
        console.log(ns);
        var t = parseInt(ns[0], 10),
            x = parseInt(ns[1], 10),
            y = parseInt(ns[2], 10);
        console.log(t,x,y);
        var sum = x + y;
        console.log(sum);
        return (t >= sum) && ((t % 2) === (sum % 2));
    });

    if (isValid) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

main(require("fs").readFileSync("../input.txt", "utf8"));
