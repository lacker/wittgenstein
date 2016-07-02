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

function union(a, b) {
  let s = new Set(a);
  return b.filter(x => s.has(x));
}

function intersect(a, b) {
  let s = new Set(a);
  for (let x of b) {
    s.add(x);
  }
  return [...s];
}

// Works on exact names and single words
export default function find(word) {
  if (byName[word]) {
    return byName[word];
  }
  let body = byKeyword[word] || [];
  let title = byNameTerm[word] || [];
  let u = union(body, title);
  if (u.length > 0) {
    return choice(u);
  }
  if (body.length > 0) {
    return choice(body);
  }
  if (title.length > 0) {
    return choice(title);
  }
  return byName['confused face'];
}

