let result =0
for ( let i = 0 ; i < 5 ; i++){
    let number = Number(prompt())
    if (number % 2 !== 0){
        result = result + number
    }
}
document.writeln(result)
