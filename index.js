const jsreport = require("jsreport");
const fs = require('fs');
const outputFolder = 'output/';
const outputFile = 'dictionary.pdf';
const template = "templates/template.html.ejs";
const wordsPerPage = 30;

function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunkLength = i === 0 ? len - 1 : len;
    chunks.push(
      {
        heading: arr[0].english,
        words: arr.slice(i, i += chunkLength),
      }
    );
  }

  return chunks;
}

fs.readFile(template, (err, data) => {
  createReport(data.toString());
});

const a = [
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'alpha', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'apple', syriac: 'ܐܣܛܪܢܓܠ'},
{english: 'adam', syriac: 'ܐܣܛܪܢܓܠ'},
]

async function createReport(template) {
  try {
    const output = await jsreport.render({
      data: {
        wordGroups: [
          {
            letter: 'a'.toUpperCase(),
            wordChunks: chunk(a, wordsPerPage),
          },
          {
            letter: 'b'.toUpperCase(),
            wordChunks: chunk(a, wordsPerPage),
          },
        ]
      },
      template: {
        content: template.replace(/ }}/g, "}}").replace(/{{ /g, "{{"),
        recipe: "chrome-pdf",
        engine: "ejs",
        chrome: {
          width: "840px",
          height: "1190px",
        }
      },
    })

    if (!fs.existsSync(outputFolder)){
      fs.mkdirSync(outputFolder);
    }
    fs.writeFile(`${outputFolder}${outputFile}`, output.content, function(err, data){
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  }
  catch (e) {
    
    console.log(e);
  }
}