const fs = require('fs');
const content = fs.readFileSync('artifact1.html', 'utf-8');
const text = content.replace(/<[^>]*>/g, '');
fs.writeFileSync('cleaned.txt', text);
