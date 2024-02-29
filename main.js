let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let btnRzuc = document.getElementById("btn-rzuc");
let btnPoliczPi = document.getElementById("btn-policzPi");
let iloscRzuconychKamieni = 1000;
let x = 0;
let y = 0;
let iloscKamieniWKole = 0;
let tabX = []; // tablica współrzędnych x rzuconych kamieni
let tabY = [];
let r = 300;  // promień koła
let PI = 0;

rysuj();   // rysuje

function rysuj() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
    rysujUkladWspolrzednych();
    rysujKwadrat();
    rysujKolo();
}

// rzucanie kamieniami
btnRzuc.onclick = function () {
    alert("I throw :)");
    // czyścimy tablice z współrzędnymi
    tabX = [];
    tabY = [];
    //alert(tabX.length + " pocz " + tabY.length);
    for (let i = 0; i < iloscRzuconychKamieni; i++) {
        // Returns a random integer from 100 to 700:
        x = Math.floor(Math.random() * 601) + 100;
        y = Math.floor(Math.random() * 601) + 100;
        ctx.fillRect(x, y, 2, 2); // fill rect in at (x,y)
        // dodaj współrzędne do tablicy
        tabX.push(x);
        tabY.push(y);
    }
    //alert(tabX.length + " " + tabY.length);
}

// oblicza PI
btnPoliczPi.onclick = function () {
    iloscKamieniWKole = 0;
    // zliczamy ilosć kamieni w kole
    // https://www.matemaks.pl/rownanie-okregu.html
    // (x−a)2+(y−b)2=r2
    for (let i = 0; i < iloscRzuconychKamieni; i++) {
        if ((tabX[i] - 400) * (tabX[i] - 400) + (tabY[i] - 400) * (tabY[i] - 400) <= r * r) {
            iloscKamieniWKole++;
        }
    }
    alert("number of stones in the circle: " + iloscKamieniWKole);
    PI = 4 * iloscKamieniWKole / iloscRzuconychKamieni;
    alert("PI: " + PI);
}

function rysujUkladWspolrzednych() {
    ctx.beginPath(); // Start a new path
    ctx.moveTo(400, 800); // Move the pen
    ctx.lineTo(400, 0); // Draw a line
    ctx.moveTo(0, 400); // Move the pen
    ctx.lineTo(800, 400); // Draw a line
    ctx.stroke(); // Render the path
}

function rysujKwadrat() {
    ctx.strokeStyle = "blue";
    ctx.beginPath(); // Start a new path
    ctx.moveTo(100, 100);
    ctx.lineTo(700, 100);
    ctx.lineTo(700, 700);
    ctx.lineTo(100, 700);
    ctx.lineTo(100, 100);
    ctx.stroke(); // Render the path
}

function rysujKolo() {
    ctx.strokeStyle = "red";
    ctx.beginPath(); // Start a new path
    ctx.arc(400, 400, 300, 0, 2 * Math.PI);
    ctx.stroke(); // Render the path
}
