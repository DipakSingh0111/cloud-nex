const fs = require('fs');
const dataStr = fs.readFileSync('data/cloudNex.json', 'utf8');
let data = JSON.parse(dataStr);

const localImages = [];
for (let i = 1; i <= 10; i++) {
  const num = i < 10 ? '0' + i : i;
  localImages.push('/images/images_' + num + '.jpg');
}
let idx = 0;

function replaceLinks(obj) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'string' && obj[i].startsWith('http')) {
        obj[i] = localImages[idx % localImages.length];
        idx++;
      } else if (typeof obj[i] === 'object' && obj[i] !== null) {
        replaceLinks(obj[i]);
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (let key in obj) {
      if (typeof obj[key] === 'string' && obj[key].startsWith('http')) {
        obj[key] = localImages[idx % localImages.length];
        idx++;
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        replaceLinks(obj[key]);
      }
    }
  }
}

replaceLinks(data);
fs.writeFileSync('data/cloudNex.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Replaced ' + idx + ' links.');
