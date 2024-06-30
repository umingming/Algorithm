/**
 * BPS
 * 1. m과 n을 입력 받아 저장함.
 * 2. 그 이후 입력들을 배열에 저장
 * 3. m+n으로 반복
 *  > m만큼 반복하고 그 내부에 n만큼 반복
 *  > 1보다 큰거나 같은지? 상하좌우가 0인지?
 *      > 해당 수 +1로 0인 값 채우기
 *  > 0이 존재하는지 여부를 따라서 더이상 존재 안 하면 return i
 * 4. return -1
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let m, n;
const box = [];
let result = -1;

rl.on("line", (line) => {
    if (m && n) {
        box.push(line.split(" ").map(num => +num));
    } else {
        [m, n] = line.split(" ").map(num => +num);
    }

    if (box.length === n) {
        solution();
        rl.close();
    }
});

rl.on("close", () => {
    console.log(result);
    process.exit();
})

function solution() {
    for (let i = 0; i < m + n; i++) {
        let hasZero = false;

        for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
                const target = box[j][k];

                if (target < 1) {
                    if (target === 0) {
                        hasZero = true;

                        if (box[j] && box[j][k - 1] !== -1) {
                            continue;
                        } else if (box[j] && box[j][k - 1] !== -1) {
                            continue;
                        } else if (box[j - 1] && box[j - 1][k] !== -1) {
                            continue;
                        } else if (box[j + 1] && box[j + 1][k] !== -1) {
                            continue;
                        }
                        return;
                    }
                    continue;
                }

                if (box[j] && (box[j][k - 1] === 0 || box[j][k - 1] > target + 1)) {
                    box[j][k - 1] = target + 1;
                    hasZero = true
                }
                if (box[j] && (box[j][k + 1] === 0 || box[j][k + 1] > target + 1)) {
                    box[j][k + 1] = target + 1;
                    hasZero = true
                }
                if (box[j - 1] && (box[j - 1][k] === 0 || box[j - 1][k] > target + 1)) {
                    box[j - 1][k] = target + 1;
                    hasZero = true
                }
                if (box[j + 1] && (box[j + 1][k] === 0 || box[j + 1][k] > target + 1)) {
                    box[j + 1][k] = target + 1;
                    hasZero = true
                }
            }
        }

        if (!hasZero) {
            result = Math.max(...box.flat()) - 1;
            return;
        }
    }
}