import * as atf2png from "./index";
import * as path from "path";

atf2png.convert(path.join(__dirname,"../test.atf")).then(result => console.log(result));