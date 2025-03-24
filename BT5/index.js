
    let n;
    for ( let n = 1 ; n <= 100 ; n++)
    {
    if(n % 3 == 0 ){
            if( n % 5 ==0 ){
                document.writeln("FizzBuzz<br>")
            }
            else{
                document.writeln("Fizz<br>")
            }
    }
    else if (n % 5 ==0){
        document.writeln("Buzz<br>");
    }
    else {
        document.writeln(n+"<br>");
    }
    }