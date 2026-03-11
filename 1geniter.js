function* fibgen() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const gen = fibgen();
let total = 0n;

for (let i = 0; i < 20; i++) {
    const val = gen.next().value;
    total += BigInt(val);
    const avg = total / BigInt(i + 1);
    console.log(`result=${val}    total=${total}  avg=${avg}`);
}