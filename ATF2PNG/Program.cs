using System;
using System.Drawing.Imaging;
using System.IO;
using Atf;
using CommandLine;

namespace atf2png
{
    class Options
    {
        [Option('o', "output", Required = false, HelpText = "Output file name")]
        public string Output { get; set; }

        [Option('a', "atlas", Required = false, HelpText = "Atlas to be used")]
        public string Atlas { get; set; }

        [Value(0, MetaName = "input file",
            HelpText = "Input ATF file to be processed.",
            Required = true)]
        public string FileName { get; set; }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Parser.Default.ParseArguments<Options>(args)
                .WithParsed<Options>(o =>
                {
                    if (!File.Exists(o.FileName))
                    {
                        Console.WriteLine("File " + o.FileName + " not found!");
                        return;
                    }
                    if(o.Output != null && Path.GetExtension(o.Output) != ".png"){
                        Console.WriteLine("Output file is not a png file");
                        return;
                    }
                    ATFReader atf;
                    try { using (FileStream atFileStream = new FileStream(o.FileName, FileMode.Open, FileAccess.Read)) { atf = new ATFReader(atFileStream); } }
                    catch (Exception e) { Console.WriteLine(e.Message); return; }
                    string xmlFileName;
                    var nameWithoutExtension = Path.Combine(Path.GetDirectoryName(o.FileName), Path.GetFileNameWithoutExtension(o.FileName));
                    if (o.Atlas != null) xmlFileName = o.Atlas;
                    else xmlFileName = nameWithoutExtension + ".xml";
                    if (!File.Exists(xmlFileName))
                    {
                        string outFile = o.Output!=null?o.Output:nameWithoutExtension + ".png";
                        Console.WriteLine("Saving " + outFile);
                        atf.Bitmap.Save(outFile, ImageFormat.Png); return;
                    }
                    var xml = File.ReadAllText(xmlFileName);
                    Atlas atlas = new Atlas(xml, atf.Bitmap);
                    if (!atlas.Correct) { Console.WriteLine("Incorrect atlas!"); return; }
                    Directory.CreateDirectory(nameWithoutExtension);
                    Console.WriteLine("Saving textures into " + nameWithoutExtension);
                    atlas.Names().ForEach(x => atlas.GetTexture(x).Save(Path.Combine(nameWithoutExtension, x + ".png")));
                });
        }
    }
}