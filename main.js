import {
    getRandomScores,
    getStudentJSON,
    runTitle
} from './lib.js';

import Student from "./Student.js";

const studentEhB = new Student("Kenza", "21", "8");

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();
warmup5();

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
        // UL zorgt ervoor dat ze in een lijst gaan en zo op elkaar zijn
        html += '</ul>';
        console.log(html);
        document.querySelector('#content-2').innerHTML = html;
    });

    //TODO: sorteer button nog koppelen en doen
    document.querySelector('#button-2c').addEventListener('click', function () {
        // Zorgt ervoor dat de scores samen worden opgeteld
        const sum = scores.reduce(function (total, current) {
            return total + current;
        })
        document.querySelector('#content-2').insertAdjacentHTML('beforeEnd', `<h1>Totaal: ${sum}</h1>`)
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
    console.log("Exercise week 3");
    let student = getStudentJSON();

    // TODO weergeven van JS object van student
    document.querySelector('#button-3a').addEventListener('click', function () {
        console.log(student);
    });

    // TODO B: html toevoegen op basis van student
    document.querySelector('#button-3b').addEventListener('click', function () {
        const json = student;
        const studentObject = JSON.parse(json);
        console.log(studentObject.name);
        let test = "";
        test = "graduated";

        if (studentObject.isGraduated == true) {

        } else if (studentObject.isGraduated != true) {

        }

        // class in the content toevoegen
        document.querySelector('#content-3').innerHTML = `<h2 class="${test}">Naam: ${studentObject.name} ${studentObject.firstname}</h2><h3>Leeftijd: ${studentObject.age} </h3>`;

    });
}

function warmup4() {

    let main, min, max;

    document.querySelector('#button-4a').addEventListener('click', function () {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                main = data.main.temp;
                min = data.main.temp_min;
                max = data.main.temp_max;
            })
    })

    document.querySelector('#button-4b').addEventListener('click', function (data) {
        document.querySelector('#content-4').innerHTML =
            `
            <h2>Temp: ${main}</h2>
            <h2>Min temp: ${min}</h2>
            <h2>Max temp: ${max}</h2>
        `
    })
}

function warmup5() {
    document.querySelector('#button-5a').addEventListener('click', function () {
        console.log(studentEhB);
    })

    document.querySelector('#button-5b').addEventListener('click', function () {
        document.querySelector('#content-5').innerHTML =
            `
        <h2>Name: ${studentEhB.name}</h2>
        <h2>Score: ${studentEhB.score}</h2>
        `
    })
}