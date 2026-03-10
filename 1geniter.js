function* fibgen() {
    let a = 0n, b = 1n;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
