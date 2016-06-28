// A scraper to gather emoji data
const fetch = require('isomorphic-fetch');

const url = 'http://unicode.org/emoji/charts/full-emoji-list.html';

function intag(blob) {
  return blob.split('>')[1].split('<')[0].toLowerCase();
}

fetch(url).then(response => response.text()).then(body => {
  const lines = body.split('\n');
  let filtered = [];
  let buffer = {};

  function flushBuffer() {
    if (buffer.emoji) {
      filtered.push(buffer);
      console.log(buffer);
    }
    buffer = {};
  };

  for (let line of lines) {
    if (line.match(/class=.chars/)) {
      // It's the emoji itself
      flushBuffer();
      buffer.emoji = intag(line);
    } else if (line.match(/class=.name/)) {
      if (line.match(/a><.td/)) {
        // It's keywords
        let chunks = line.match(/>[a-z]*<.a/g);
        buffer.keywords = chunks.map(intag);
      } else {
        // It's the formal name
        buffer.name = intag(line);
      }
    }
  }
  flushBuffer();
});

console.log('scraping...');
