// Searching for emoji.


let data = require('./emoji.json');

let byName = {};

let byKeyword = {};

// Maps each term to a list of emoji that have it in their name
let byNameTerm = {};

for (let entry of data) {
  byName[entry.name] = entry.emoji;
  for (let nameTerm of entry.name.split(' ')) {
    if (!byNameTerm[nameTerm]) {
      byNameTerm[nameTerm] = [];
    }
    byNameTerm[nameTerm].push(entry.emoji);
  }
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

