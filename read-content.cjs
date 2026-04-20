const fs = require('fs');

const path = 'src/components/ui/content-sections.tsx';
let data = fs.readFileSync(path, 'utf8');

if (data) {
   console.log("Size:", data.length);
}
