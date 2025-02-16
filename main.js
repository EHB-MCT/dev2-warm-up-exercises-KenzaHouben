import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

runTitle();
warmup1();

function warmup1() {
    console.log("Exercise week 1");

    // Oefening 1a: plaats je naam

    const p = "Hallo, dit is de oefening van Kenza";

    document.getElementById("button-1a").addEventListener('click', function () {
        document.getElementById("content-1").innerHTML += p;
    });

    // Oefening 1b: verander de achtergrond

    document.getElementById("button-1b").addEventListener('click', function () {
        document.getElementById("section-1").style.background = "lightblue";
    });

    // Oefening 1c: ben je er klaar voor?

    const h = "Ik ben er klaar voor";
    const container = document.getElementById("content-1");

    document.getElementById("button-1c").addEventListener('click', function () {

        container.innerHTML += h;
        container.insertAdjacentElement('beforeend', h);

    });

}

function warmup2() {
    console.log("Exercise week 2");
    const scores = getRandomScores(10);
}

function warmup3() {
    let student = getStudentJSON();
}

function warmup4() {
    let main, min, max;
}

function warmup5() {

}