let money = prompt()
money = money.replaceAll(".", "");
money = Number(money)
money /= 1000
let count500=0, count200=0, count100=0, count50=0, count20=0, count10=0, count5=0, count2=0, count1=0; 
while(money >= 500){
    count500++
    money -= 500
}
console.log(money);

while(money >= 200){
    count200++
    money -= 200
}
while(money >= 100){
    count100++
    money -= 100
}
while(money >= 50){
    count50++
    money -= 50
}
while(money >= 20){
    count20++
    money -= 20
}
while(money >= 10){
    count10++
    money -= 10
}
while(money >= 5){
    count5++
    money -= 5
}
while(money >= 2){
    count2++
    money -= 2
}
while(money >= 1){
    count1++
    money -= 1
}
if ( count500 > 0 ){
    document.writeln("500.000 : " + count500 + " tờ<br>")
} 
if ( count200 > 0 ){
    document.writeln("200.000 : " + count200 + " tờ<br>")
} 
if ( count100 > 0 ){
    document.writeln("100.000 : " + count100 + " tờ<br>")
} 
if ( count50 > 0 ){
    document.writeln("50.000 : " + count50 + " tờ<br>")
} 
if ( count20 > 0 ){
    document.writeln("20.000 : " + count20 + " tờ<br>")
} 
if ( count10 > 0 ){
    document.writeln("10.000 : " + count10 + " tờ<br>")
} 
if ( count5 > 0 ){
    document.writeln("5.000 : " + count5 + " tờ<br>")
} 
if ( count2 > 0 ){
    document.writeln("2.000 : " + count2 + " tờ<br>")
} 
if ( count1 > 0 ){
    document.writeln("1.000 : " + count1 + " tờ<br>")
} 