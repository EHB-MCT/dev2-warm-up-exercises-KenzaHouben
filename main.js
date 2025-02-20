import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();
warmup2();

function warmup1() {
    console.log("Exercise week 1");

    // Oefening 1a: plaats je naam

    const p = "Hallo, dit is de oefening van Kenza";

    document.getElementById("button-1a").addEventListener('click', function () {
        document.getElementById("content-1").innerHTML = p;
    });

    // Oefening 1b: verander de achtergrond

    document.getElementById("button-1b").addEventListener('click', function () {
        document.getElementById("section-1").style.background = "lightblue";
    });

    // Oefening 1c: ben je er klaar voor?

    // '<h1>' "Ik ben er klaar voor" '</h1>';

    const h = '<h1> Ik ben er klaar voor </h1>';
    const container = document.getElementById("content-1");

    document.getElementById("button-1c").addEventListener('click', function () {

        container.innerHTML += h;
        container.insertAdjacentElement('beforeend', h);

    });

}

function warmup2() {
    console.log("Exercise week 2");

    let scores = getRandomScores(10);

    document.querySelector('#button-2a').addEventListener('click', function () {
        let html = '<ul>';
        scores.forEach(function (score) {

            console.log(score);
            // backticks gebruiken om er iets in te gooien zoals een lijst
            html += `<li>${score}</li>`;
        });
        html += '</ul>';
        console.log(html);
        document.querySelector('#content-2').innerHTML = html;



        document.querySelector('#button-2c').addEventListener('click', function () {
            // Zorgt ervoor dat de scores samen worden opgeteld
            const sum = scores.reduce(function (total, current) {
                return total + current;
            })
            document.querySelector('#content-2').insertAdjacentHTML('beforeEnd', `<h1>Totaal: ${sum}</h1>`)
        });

    });

    // Zorgt ervoor dat de scores gesorteerd worden -> ascending
    document.querySelector('#button-2b').addEventListener('click', function () {
        scores = scores.sort(function (a, b) {
            if (a > b) {
                return 1
            } else {
                return -1
            }
        });
        console.log(scores);
    });


}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}