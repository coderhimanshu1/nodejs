// Import fs library
const fs = require("fs");
const process = require("process");

// Cat function to read specified file
const cat = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      // Log error and exit if error encountered
      console.log("ERROR:", err);
      process.exit(1);
    }

    // Log file data if success
    console.log(`READING FILE DATA...: \n \n ${data}`);
  });
};

cat(process.argv[2]);
