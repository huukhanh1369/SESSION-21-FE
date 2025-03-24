let count1 =0, count2 =0
for ( let i = 0 ; i < 5 ; i++){
    let number = Number(prompt())
    if (number % 2 !== 0){
        count1 += 1
    } else {count2 +=1 }
}
document.writeln("số lượng các số lẻ là : " + count1)
document.writeln("số lượng các số chẵn là : " + count2)