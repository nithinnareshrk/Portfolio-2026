const sharp = require('sharp');
const path = require('path');

async function createCanvas() {
  await sharp({
    create: {
      width: 2100,
      height: 1000,
      channels: 4,
      background: { r: 10, g: 22, b: 40, alpha: 1 }
    }
  })
  .png()
  .toFile(path.join(__dirname, 'landscape-canvas.png'));
  console.log('Created landscape canvas');
}

createCanvas();
