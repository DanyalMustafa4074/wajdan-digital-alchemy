
const fs = require('fs');
const path = require('path');
const dir = 'public/animations';
const orange = '[0.811764705882,0.321568627451,0.188235294118,1]';

fs.readdirSync(dir).filter(f => f.endsWith('.json')).forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf8');
  let changed = false;
  
  // High blue, Med-low red => Cyan/Blue #11a5f5 is roughly [0.066, 0.647, 0.96]
  const blueRegex = /\
k\:\[(0\.[0-4][0-9]*),(0\.[4-9][0-9]*),(0\.[7-9][0-9]*),1\]/g;
  
  if (blueRegex.test(content)) {
    content = content.replace(blueRegex, '\k\:' + orange);
    fs.writeFileSync(path.join(dir, f), content, 'utf8');
    console.log('Fixed blue/cyan colors to orange brand color in', f);
  }
});

