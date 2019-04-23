"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child = require("child_process");
const path = require("path");
const spawn = child.spawn;
let executable = path.join(__dirname, "./ATF2PNG/ATF2PNG.dll");
let dotnet = spawn('dotnet', [executable]);
dotnet.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
dotnet.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});
dotnet.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
