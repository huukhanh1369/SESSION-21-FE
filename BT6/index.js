let num = Number(prompt())
let uoc;
if(!isNaN(num)){
    document.writeln("Các ước của số " + num + " là : ")
    for ( let i = 1 ;  i < num ; i++){
        if ( num % i === 0){
            document.writeln(i)
        }
    }
} else {document.writeln("haizzzz")}
