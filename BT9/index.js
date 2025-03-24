let num = Number(prompt())
let check = 3
if (num < 2){
    document.writeln("không Là số nguyên tố")
    check = 2
} else {
    for ( let i = 2 ; i < num ; i++){
        if (num % i == 0){
            document.writeln("không là số nguyên tố")
            check = 2
            break;
        }
    } 
}

if ( check === 3 ){
document.writeln("Là số nguyên tố")
}