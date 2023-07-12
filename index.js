const { Resvg } = require("@resvg/resvg-js");
const fs = require("fs");
const { join } = require("path");
const args = require("yargs")(process.argv).parse();

async function main() {
  const inputfile = args.i;
  const outputfile = args.o;
  const width = args.w;
  const background = args.bg || "#000000";

  if (!inputfile || !outputfile || !width) {
    console.log("Did not specify input, output, or width.");
    process.exit();
  }

  const svg = fs.readFileSync(join(process.cwd(), inputfile));

  const opts = {
    background,
    fitTo: {
      mode: "width",
      value: parseInt(width),
    },
  };

  const resvg = new Resvg(svg, opts);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  fs.writeFileSync(join(process.cwd(), outputfile), pngBuffer);
}

main();
