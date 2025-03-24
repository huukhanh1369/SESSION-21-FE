let count = 22
for (let i = 0 ; i < 8 ; i++){
    for ( let j = 0 ; j < count ; j++){
        if ( j == 0 || i == 0 || j == 21 || i == 7 ){
            document.writeln("*")

        }else{
            document.writeln("&nbsp;&nbsp;")
        }

    }
    document.writeln("<br>")
}