const main = (input) => {
    input = input.split("\r\n");
    const A = Number(input[0]);
    const B = Number(input[1]);
    const C = Number(input[2]);
    const X = Number(input[3]);
    let order = 0;
    
    for (let a = 0; a <= A; a++) {
        for (let b = 0; b <= B; b++) {
            for (let c = 0; c <= C; c++) {
                const sum = (500 * a) + (100 * b) + (50 * c);
                if (sum === X) {
                    order += 1;
                }
            }
        }
    }
    console.log(order);
};

main(require("fs").readFileSync("input.txt", "utf8"));
