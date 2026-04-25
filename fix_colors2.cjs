const fs = require('fs');
const path = require('path');
const dir = 'public/animations';

fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf8');
  let changed = false;
  
  // #11a5f5 is roughly [0.066, 0.647, 0.96, 1]
  // We match general blue/cyan
  const blueRegex = /"k":\[0\.[0-4][0-9]*,0\.[4-9][0-9]*,0\.[7-9][0-9]*,1\]/g;
  const brandOrange = '"k":[0.811764705882,0.321568627451,0.188235294118,1]';

  if (blueRegex.test(content)) {
    content = content.replace(blueRegex, brandOrange);
    fs.writeFileSync(path.join(dir, f), content, 'utf8');
    console.log('Fixed blue/cyan colors to orange brand color in', f);
  }
});