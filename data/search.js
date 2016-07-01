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

function choice(alist) {
  return alist[Math.floor(Math.random() * alist.length)];
}

export default function find(word) {
  if (byName[word]) {
    return byName[word];
  }
  if (byKeyword[word]) {
    let list = byKeyword[word];
    return choice(list);
  }
  return byName['confused face'];
}

