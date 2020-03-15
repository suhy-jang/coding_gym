function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

function equalStacks(h1, h2, h3) {
    let sum1 = sum(h1);
    let sum2 = sum(h2);
    let sum3 = sum(h3);
    let min = Math.min(sum1, sum2, sum3);

    while (sum1 != sum2 || sum1 != sum3) {
        if (min < sum1) {
            sum1 -= h1.shift();
        }
        if (min < sum2) {
            sum2 -= h2.shift();
        }
        if (min < sum3) {
            sum3 -= h3.shift();
        }
        min = Math.min(sum1, sum2, sum3);
    }
    return sum1;
}
