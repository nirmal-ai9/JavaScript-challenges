const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

console.log("chokidar activated");

const watchedFolders = ['"sum of digits"/solutions'];
const watcher = chokidar.watch(watchedFolders, { ignoreInitial: true });

watcher.on('add', (filePath) => {
  const folder = path.dirname(filePath);
  const fileName = path.basename(filePath);
  console.log(folder);
  console.log(fileName);
  const configPath = path.join(path.dirname(folder), "config.json");
  const data = JSON.parse(fs.readFileSync(configPath,  "utf8"));

  const template = `function ${data.function}(${data.params.join(", ")}){
  // Your code goes here
  return result;
}

module.exports = ${data.function};
if (require.main === module) {
  require("../../index.js")(__filename);
}`;
  
  fs.writeFileSync(filePath, template, "utf8");  
});
