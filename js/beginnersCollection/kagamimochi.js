// Set型を使わず，固有な値のみを取り出す
// const main = (input) => {
//     const riceCakes = input.split("\n").map((riceCake) => Number(riceCake));
//     riceCakes.shift()
//     const uniqueRiceCakes = riceCakes.filter((x, i, self) => {
//         return self.indexOf(x) === i;
//     });
//     console.log(uniqueRiceCakes.length);
// }

// Set型を利用
const main = (input) => {
    const riceCakes = input.split("\n").map((riceCake) => Number(riceCake));
    const uniqueRiceCakes = new Set(riceCakes);
    console.log(uniqueRiceCakes.size);
};

main(require("fs").readFileSync("../input.txt", "utf8"));