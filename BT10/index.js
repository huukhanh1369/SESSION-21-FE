let num = Number(prompt())
let count = 0
let number = 2
while (count < num) {
    check = 1; 

    for (let i = 2; i * i <= number; i++) {
        if (number % i == 0) {
            check = 0; 
            break;
        }
    }

    if (check) {
        document.writeln(number)
        count++;  
    }

    number++; 
}