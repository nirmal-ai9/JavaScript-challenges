const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');

console.log("Watcher activated...");
const watcher = chokidar.watch('*/solutions/*.js', {
  cwd: __dirname,
  ignoreInitial: true,
  ignored: ['**/node_modules/**', '**/.git/**'],
  usePolling: true,
  interval: 100,
});

watcher.on('ready', () => console.log('Initial scan complete, ready for changes'));
watcher.on('error', (err) => console.error('Watcher error:', err));
watcher.on('add', (filePath) => {
  const folder = path.dirname(filePath);
  const fileName = path.basename(filePath);
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
