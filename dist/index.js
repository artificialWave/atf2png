"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child = require("child_process");
const path = require("path");
let convert = function (input, output = null) {
    return new Promise((resolve, reject) => {
        const exec = child.exec;
        let executable = path.join(__dirname, "./ATF2PNG/ATF2PNG.dll");
        let process = exec("dotnet " + executable + " " + input, function (err, stdout, stderr) {
            if (err)
                throw err;
            else if (stderr)
                reject(stderr);
            else
                resolve(stdout);
        });
    });
};
exports.convert = convert;
