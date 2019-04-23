"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atf2png = require("./index");
const path = require("path");
atf2png.convert(path.join(__dirname, "../test.atf")).then(result => console.log(result));
