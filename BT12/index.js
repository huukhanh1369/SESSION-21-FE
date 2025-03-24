let col;
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    switch (randomNum) {
        case 0: col = "blue"; break;
        case 1: col = "green"; break;
        case 2: col = "orange"; break;
        case 3: col = "pink"; break;
        case 4: col = "navy"; break;
        case 5: col = "red"; break;
        case 6: col = "yellow"; break;
        case 7: col = "cyan"; break;
        case 8: col = "purple"; break;
        case 9: col = "magenta"; break;
    }
    console.log("%cMàu sắc đã được thay đổi", `color: ${col}`);
}
