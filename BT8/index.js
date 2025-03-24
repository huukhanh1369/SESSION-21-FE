
document.writeln("Các số Armstrong có 3 chữ số là : ")
for (let num = 100; num < 1000; num++) {
    let total = 0;
    let tempNum = Number(num);
    while (tempNum > 0) {
        let digit = tempNum % 10;
        total += Math.pow(digit, 3);
        tempNum = Math.floor(tempNum / 10);
    }
    if (total == Number(num)) {
        document.writeln(total)
    }
}


