// Classes gaan we altijd met hoofdletter schrijven
export default class Student {
    constructor(name, age, score, allowed = true) {
        this._name = name;
        this._age = age;
        this._score = score;
        // Elke instantie die we aanmaken, maken we true
        this._allowed = allowed;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get score() {
        return this._score;
    }
}