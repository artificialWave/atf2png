import * as child from 'child_process';

const spawn = child.spawn;

let dotnet = spawn('dotnet', ["run", "-p", "./ATF2PNG"]);

dotnet.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

dotnet.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

dotnet.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});