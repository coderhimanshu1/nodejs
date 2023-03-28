// Import fs library
const fs = require("fs");
const process = require("process");

const cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR:", err);
      process.exit(1);
    }
    console.log(`READING FILE DATA...: \n \n ${data}`);
  });
};

cat(process.argv[2]);
