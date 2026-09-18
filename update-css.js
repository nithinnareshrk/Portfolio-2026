const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/app/(without-sidebar)/works/gear-guru/page.module.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update .inner
css = css.replace(
/\.inner\s*\{\s*width:\s*100%;\s*\}/g,
`.inner {
  width: 100%;
  padding: 80px 120px;
}`
);

// 2. Remove all .inner:nth-child and :first-child padding overrides
css = css.replace(/\.inner:(first-child|nth-child\(\d+\))\s*\{[^}]+\}/g, '/* removed specific section padding */');

// 3. Fix .expertiseBg padding
css = css.replace(/(\.expertiseBg\s*\{[^}]*)padding:\s*56px\s*0;([^}]*\})/g, '$1padding: 0;$2');
css = css.replace(/(\.expertiseBg\s*\{[^}]*)margin-bottom:\s*48px;([^}]*\})/g, '$1margin-bottom: 0;$2');

// 4. Fix .uiBg padding
css = css.replace(/(\.uiBg\s*\{[^}]*)padding:\s*56px\s*0;([^}]*\})/g, '$1padding: 0;$2');
css = css.replace(/(\.uiBg\s*\{[^}]*)margin-bottom:\s*48px;([^}]*\})/g, '$1margin-bottom: 0;$2');

fs.writeFileSync(cssPath, css);
console.log('CSS updated successfully.');
