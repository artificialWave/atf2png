import * as child from "child_process";
import * as path from "path"



let convert = function(input:string, output: string = null){
    return new Promise((resolve, reject) =>{
        const exec = child.exec;

        let executable = path.join(__dirname, "./ATF2PNG/ATF2PNG.dll");
    
        let process = exec("dotnet "+executable+" "+input, function(err, stdout, stderr) {
            if (err) throw err;
            else if (stderr) reject(stderr);
            else resolve(stdout);
        });
    });
}

export {convert};