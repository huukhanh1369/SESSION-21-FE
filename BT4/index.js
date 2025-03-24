let a = Number(prompt())
let b = Number(prompt())
let c = Number(prompt())
let delta = b*b - 4 * a * c
if(delta < 0 ){
    document.writeln("Phương trình không có nghiệm")
} else if ( delta > 0){
    let number1 = (-b + Math.sqrt(delta))/(2*a)
let number2 = (-b - Math.sqrt(delta))/(2*a)
    document.writeln("Phương trình có 2 nghiệm phân biệt" + " X1 = " + number1 + "," + "X2 = " + number2)
} else {
    let number3 = -b / (2*a)
    document.writeln("Phương trình có nghiệm kép" + " X1 = X2 = " + number3)
}
