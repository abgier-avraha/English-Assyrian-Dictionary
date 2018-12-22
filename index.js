const JSreport = require("jsreport");
const FS = require('fs');
const CSVToJSON = require("csvtojson");

const sourceCSV = "source.csv";
const outputFolder = 'output/';
const outputFile = 'dictionary.pdf';
const template = "templates/template.html.ejs";
const wordsPerPage = 29;

function chunk (arr, len) {

  var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunkLength = i === 0 ? len - 1 : len;
    chunks.push(
      {
        heading: arr[i].english.substring(0, 3).toUpperCase(),
        words: arr.slice(i, i += chunkLength),
      }
    );
  }

  return chunks;
}

// Start
FS.readFile(template, async (err, templateFile) => {
  const dictionaryJSON = await CSVToJSON().fromFile(sourceCSV)

  let sortedByLetter = {};
  dictionaryJSON.forEach(wordRow => {
    for (i = 0; i < 26; i++) {
      const chr = String.fromCharCode(97 + i).toUpperCase();

      const existingArray = sortedByLetter[chr] || [];
      if (wordRow.english[0].toUpperCase() === chr) {
        sortedByLetter[chr] = [...existingArray, wordRow];
      }
    }
  });

  let wordGroups = [];
  for (i = 0; i < 26; i++) {
    const chr = String.fromCharCode(97 + i).toUpperCase();
    if (sortedByLetter[chr] === undefined) {
      continue;
    }
    wordGroups.push({
      letter: chr,
      wordChunks: chunk(sortedByLetter[chr], wordsPerPage),
    });
  }

  createReport(templateFile.toString(), wordGroups);
});

async function createReport(template, wordGroups) {
  try {
    const output = await JSreport.render({
      data: {
        wordGroups: wordGroups,
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

    if (!FS.existsSync(outputFolder)){
      FS.mkdirSync(outputFolder);
    }
    FS.writeFile(`${outputFolder}${outputFile}`, output.content, function(err, data){
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  }
  catch (e) {
    
    console.log(e);
  }
}