const main = (input) => {
    const riceCakes = input.split("\n").map((riceCake) => Number(riceCake));
    riceCakes.shift()
    const uniqueRiceCakes = riceCakes.filter((x, i, self) => {
        return self.indexOf(x) === i;
    });
    console.log(uniqueRiceCakes.length);
}

main(require("fs").readFileSync("input.txt", "utf8"));