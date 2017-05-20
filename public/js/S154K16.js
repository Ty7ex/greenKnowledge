'use strict';


let price = [12344,4432,664,78,7,411,978544];

console.log(price);
let compareNumerical = (a, b) => a-b;
price.sort(compareNumerical);
console.log(price);



var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

//getJSON('https://ty7ex.bplaced.de/shop/footage/json/content.json',
getJSON('./footage/json/content.json',
function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
    alert('Der Titel der Seite lautet: ' + data.title);
  }
});
let jsonLoad = './footage/json/content.json';
console.log(`Der Titel der Seite lautet: ${jsonLoad.title}`);
