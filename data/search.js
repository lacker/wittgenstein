// Searching for emoji.


let data = require('./emoji.json');

let byName = {};

let byKeyword = {};

for (let entry of data) {
  byName[entry.name] = entry.emoji;
  for (let keyword of entry.keywords) {
    if (!byKeyword[keyword]) {
      byKeyword[keyword] = [];
    }
    byKeyword[keyword].push(entry.emoji);
  }
}

// TODO: do something with the loaded data
