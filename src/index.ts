import * as child from "child_process";
import * as path from "path"

  /**
  * Converts an atf file into a png file
  * @param input The input file to use (.atf)
  * @param output Optional output file to save to (.png)
  * @returns A promise that will result in the saved file location.
  */
let convert = function(input:string, output: string = null):Promise<string>{
    return new Promise((resolve, reject) =>{
        const exec = child.exec;

        if(input != null && input.split('.').pop() != "atf"){
            reject("Input is not atf");
            return;
        }
        if(output != null && output.split('.').pop() != "png"){
            reject("Output is not png");
            return;
        }

        let executable = path.join(__dirname, "./ATF2PNG/ATF2PNG.dll");
    
        let process = exec("dotnet "+executable+" "+input + (output!=null?" -o "+output:""), function(err, stdout, stderr) {
            if (err) throw err;
            else if (stderr) reject(stderr);
            else resolve(getResultfile(input));
        });
    });
}

let getResultfile = function(input:string):string{
    let result = input.split(".");
    result.splice(-1,1,"png");
    return result.join(".");
}

export {convert};