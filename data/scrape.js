// A scraper to gather emoji data
const fetch = require('isomorphic-fetch');

const url = 'http://unicode.org/emoji/charts/full-emoji-list.html';


fetch(url).then(response => response.text()).then(body => {
  const lines = body.split('\n');
  let filtered = [];
  let buffer = {};

  function flushBuffer() {
    if (buffer.emoji) {
      filtered.push(buffer);
    }
    buffer = {};
  };

  for (let line of lines) {
    if (line.match(/class=.chars/)) {
      flushBuffer();
      buffer.emoji = line.split('>')[1].split('<')[0];
    } else if (line.match(/class=.name/)) {
      // TODO: parse smartly
      filtered.push(line);
    }
  }
  flushBuffer();

  console.log(filtered);
  console.log(body.length, 'bytes in the body');
});

console.log('scraping...');
