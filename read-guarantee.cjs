const fs = require('fs');

const guaranteePath = 'src/components/ui/guarantee-section.tsx';
let data;
try {
   data = fs.readFileSync(guaranteePath, 'utf8');
} catch(e) {
   data = null;
}
console.log(data ? "FOUND" : "NOT FOUND");
