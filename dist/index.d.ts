/**
* Converts an atf file into a png file
* @param input The input file to use (.atf)
* @param output Optional output file to save to (.png)
* @returns A promise that will result in the saved file location.
*/
declare let convert: (input: string, output?: string) => Promise<string>;
export { convert };
