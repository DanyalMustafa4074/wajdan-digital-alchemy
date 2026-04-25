const fs = require('fs');
const files = fs.readdirSync('./public/animations').filter(f=>f.endsWith('.json'));
files.forEach(f => {
  let content = fs.readFileSync('./public/animations/' + f, 'utf8');
  // Find "k":[R, G, B, 1] where values are <= 1
  let matches = content.match(/"k":\[(0\.[0-9]+|1(\.0+)?),(0\.[0-9]+|1(\.0+)?),(0\.[0-9]+|1(\.0+)?),1\]/g);
  if (matches) {
    let unique = Array.from(new Set(matches));
    console.log(f, unique);
  }
});
