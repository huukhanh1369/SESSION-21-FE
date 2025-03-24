let count = 10;

for (let i = 0; i < count; i++) {
    for (let j = count - i; j > 0; j--) {
        document.writeln("*");
    }
    document.writeln("<br>");
}


document.writeln(`<br>`);

count = 1;

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < count; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
    count += 1; 
}


console.log(count);
count = 11;

for (let i = 0; i < count; i++) {

    for (let j = 0; j < count - i - 1; j++) {
        document.writeln("&nbsp;&nbsp;"); 
    }
    for (let k = 0; k < i; k++) {
        document.writeln("*");
    }

    document.writeln("<br>");
}


document.writeln(`<br>`);
count = 10;
for ( let i = 0 ; i < count  ; i++){
        for (let j = 0; j < i; j++) {
        document.writeln("&nbsp;&nbsp;");
    }
    for (let k = 0 ; k < count - i ; k++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}
