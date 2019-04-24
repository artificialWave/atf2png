"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atf2png = require("./index");
const path = require("path");
atf2png.convert(path.join(__dirname, "../test.png"))
    .then(result => console.log(result))
    .catch(result => console.log(result));
atf2png.convert(path.join(__dirname, "../test.atf"))
    .then(result => console.log(result))
    .catch(result => console.log(result));
atf2png.convert(path.join(__dirname, "../test.atf"), path.join(__dirname, "../test2.png"))
    .then(result => console.log(result))
    .catch(result => console.log(result));
atf2png.convert(path.join(__dirname, "../test.atf"), path.join(__dirname, "../test3.jpg"))
    .then(result => console.log(result))
    .catch(result => console.log(result));
