// Import fs library
const fs = require("fs");
const process = require("process");
const axios = require("axios");

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

// webCat function to read url data

async function webCat(url) {
  try {
    const res = await axios.get(url);
    console.log(`READING URL DATA>>> \n \n ${res.data}`);
  } catch {
    console.log("ERROR READING URL:", err);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
