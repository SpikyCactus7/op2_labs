export async function* iter(gen, duration) {
    let total = 0n;
    let count = 0;
    const time = Date.now() + duration;

for (const val of gen) {
    if (Date.now() >= time) 
        break;
    total += BigInt(val);
    const avg = total / BigInt(++count);
    console.log(`result=${val}    total=${total}  avg=${avg}`);

    await new Promise(resolve => setTimeout(resolve, 100));
    }
    return {total, avg: total / BigInt(count)};
}