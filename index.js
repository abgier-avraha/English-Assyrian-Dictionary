const jsreport = require("jsreport");
const fs = require('fs');
const outputFolder = 'output/';
const outputFile = 'dictionary.pdf';


fs.readFile("template.html", (err, data) => {
  createReport(data.toString());
});

async function createReport(template) {
  try {
    const output = await jsreport.render({
      template: {
        content: template,
        recipe: "chrome-pdf",
        engine: "handlebars",
        chrome: {
          headerTemplate: "<p>some header</p>",
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