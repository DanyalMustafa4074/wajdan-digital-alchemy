const fs = require('fs');
const files = fs.readdirSync('./public/animations').filter(f=>f.endsWith('.json'));
files.forEach(f => {
  let content = fs.readFileSync('./public/animations/' + f, 'utf8');
  let m = content.match(/"k":\[0\.066[0-9]*,0\.647[0-9]*,0\.96[0-9]*,[0-9.]+\]/g);
  if (m) console.log(f, Array.from(new Set(m)));
});
