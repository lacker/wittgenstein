// A scraper to gather emoji data
import fetch from 'node-fetch';

const url = 'http://unicode.org/emoji/charts/full-emoji-list.html';


fetch(url, response => {
  console.log(response);
});
