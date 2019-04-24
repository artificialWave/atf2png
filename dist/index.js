"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child = require("child_process");
const path = require("path");
/**
* Converts an atf file into a png file
* @param input The input file to use (.atf)
* @param output Optional output file to save to (.png)
* @returns A promise that will result in the saved file location.
*/
let convert = function (input, output = null) {
    return new Promise((resolve, reject) => {
        const exec = child.exec;
        if (input != null && input.split('.').pop() != "atf") {
            reject("Input is not atf");
            return;
        }
        if (output != null && output.split('.').pop() != "png") {
            reject("Output is not png");
            return;
        }
        let executable = path.join(__dirname, "./ATF2PNG/ATF2PNG.dll");
        let process = exec("dotnet " + executable + " " + input + (output != null ? " -o " + output : ""), function (err, stdout, stderr) {
            if (err)
                throw err;
            else if (stderr)
                reject(stderr);
            else
                resolve(getResultfile(input));
        });
    });
};
exports.convert = convert;
let getResultfile = function (input) {
    let result = input.split(".");
    result.splice(-1, 1, "png");
    return result.join(".");
};
