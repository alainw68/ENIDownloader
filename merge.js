var merge = require(`./node_modules/easy-pdf-merge/index.js`);

merge(/([\w\d.pdf]*)/g,`./docs/doc.pdf`,function(err){

          if(err)
          return console.log(err);

          console.log("Merge complete");
});