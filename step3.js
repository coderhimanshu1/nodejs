// Import fs library
const fs = require("fs");
const process = require("process");
const axios = require("axios");

// Function to Output/ print a file
const output = (data, out) => {
  //   if --output is passed in arg
  if (out) {
    fs.writeFile(out, data, () => {
      console.log("Successfully wrote to file!");
    });
    // If error writing a file
    if (err) {
      console.log("ERROR WRITING FILE:", err);
    }
  } else {
    // If reading a file
    console.log(`READING FILE DATA...: \n \n ${data}`);
  }
};

// Cat function to read specified file
const cat = (path, out) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      // Log error and exit if error encountered
      console.log("ERROR:", err);
      process.exit(1);
    }

    // Log file data if success
    output(data, out);
  });
};

// webCat function to read url data

async function webCat(url, out) {
  try {
    const res = await axios.get(url);
    const data = res.data;
    output(data, out);
  } catch {
    console.log("ERROR READING URL:", err);
    process.exit(1);
  }
}

let path;
let out;

if (process.argv[2] === "--out") {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === "http") {
  webCat(path);
} else {
  cat(path);
}
