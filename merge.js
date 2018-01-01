var merge = require(`./node_modules/easy-pdf-merge/index.js`);

const path = './docs/';
const fs = require('fs');
let files = []

fs.readdirSync(path).forEach(file => {
    files.push(path + file);
})

merge(files,`./docs/doc.pdf`,function(err){

          if(err)
          return console.log(err);

          console.log("Merge complete");
});