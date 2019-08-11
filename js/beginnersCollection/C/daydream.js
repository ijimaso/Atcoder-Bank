const main = (input) => {
    const reverse = (s) => {
        return s.split("").reverse().join("");
    };

    const words = ['dream', 'dreamer', 'erase', 'eraser'].map((word) => reverse(word));
    const S = reverse(input.split('\n')[0]);

    let index = 0;

    while (true) {
        let word = words.find((word) => {
            return S.startsWith(word, index)
        });

        // 無限ループを抜ける
        if (!word) {
            break;
        };

        index += word.length;
    }

    if (S.length === index) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

main(require("fs").readFileSync("../input.txt", "utf8"));
