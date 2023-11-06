function genPrices(n, price, p, pp) {
    let s = 0;
    const avg = price * (1 - p);
    console.log('avg', avg)
    const result = [];
    let acc = 0;
    for (let i = 0; i < n; i++) {
        let random = 0;
        if (i === (n - 1)) {
            random = -acc;
        } else {
            while (true) {
                random = pp * Math.random().toFixed(2);
                let tmpAcc = 0;
                if (acc > 0) {
                    random = - random;
                }
                tmpAcc = acc + random;
                let nextR = Math.abs(tmpAcc / (n - 1));
                console.log('nextR', nextR)
                if (nextR <= pp) {
                    acc = tmpAcc;
                    break;
                }
            }
        }
        console.log('random', random)
        let element = Math.round(avg * (1 + random));
        result.push(element);
        console.log('push', element)
        console.log('acc', acc)
        s += element;
    }
    console.log('result', result)
    console.log('s', s)
    console.log('n', n)
    console.log('avg', s / n)
    return result;
}


let arr = genPrices(10, 1000000, 0.05, 0.3)
// otherSum
arr.push(101)
console.log(arr.includes(100))