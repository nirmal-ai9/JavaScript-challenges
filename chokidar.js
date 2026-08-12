const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const watchedFolders = [
  '"sum of digits"/solutions'
];
const watcher = chokidar.watch(watchedFolders, { ignoreInitial: true });

watcher.on('add', (filePath) => {
  const folder = path.dirname(filePath);
  const fileName = path.basename(filePath);
});
