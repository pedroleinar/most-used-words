const { ipcMain } = require('electron');

const pathsToTows = require('./pathsToRow');
const prepareDate = require('./prepareData.');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
  pathsToTows(paths)
    .then((rows) => prepareDate(rows))
    .then((words) => groupWords(words))
    .then((groupedWords) => {
      event.reply('process-subtitles', groupedWords);
    });
});
