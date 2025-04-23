const https = require('https');
const fs = require('fs');
const path = require('path');

const assets = [
  {
    url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon.png',
    filename: 'marker-icon.png'
  },
  {
    url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x.png',
    filename: 'marker-icon-2x.png'
  },
  {
    url: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png',
    filename: 'marker-shadow.png'
  }
];

const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

assets.forEach(asset => {
  const file = fs.createWriteStream(path.join(publicDir, asset.filename));
  https.get(asset.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${asset.filename}`);
    });
  }).on('error', err => {
    fs.unlink(path.join(publicDir, asset.filename));
    console.error(`Error downloading ${asset.filename}: ${err.message}`);
  });
}); 