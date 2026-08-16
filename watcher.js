const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

console.log("Watcher activated...");

const watcher = chokidar.watch(__dirname, {
  ignoreInitial: true,
  ignored: ["node_modules"]
});

watcher.on('ready', () => console.log('Initial scan complete, ready for changes'));
watcher.on('error', (err) => console.error('Watcher error:', err));
watcher.on('add', (filePath) => {
  const absolutePath = path.resolve(filePath);
  const folder = path.dirname(absolutePath);
  
  if (path.basename(folder) !== "solutions" || path.extname(absolutePath) !== ".js") {
    return;
  }
  
  const challengeDir = path.dirname(folder);
  const configPath = path.join(challengeDir, "config.json");
  const data = JSON.parse(fs.readFileSync(configPath,  "utf8"));

  const template = `function ${data.function}(${data.params.join(", ")}){
  // Your code goes here
  return result;
}

module.exports = ${data.function};
if (require.main === module) {
  require("../../index.js")(__filename);
}`;
  
  fs.writeFileSync(absolutePath, template, "utf8");  
});
