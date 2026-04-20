const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

if (!css.includes('.animation-delay-100')) {
  css += `
/* Animation Delay Utilities */
@layer utilities {
  .animation-delay-75 { animation-delay: 75ms; }
  .animation-delay-100 { animation-delay: 100ms; }
  .animation-delay-150 { animation-delay: 150ms; }
  .animation-delay-200 { animation-delay: 200ms; }
  .animation-delay-300 { animation-delay: 300ms; }
  .animation-delay-400 { animation-delay: 400ms; }
  .animation-delay-500 { animation-delay: 500ms; }
  .animation-delay-600 { animation-delay: 600ms; }
  .animation-delay-700 { animation-delay: 700ms; }
  .animation-delay-800 { animation-delay: 800ms; }
  .animation-delay-1000 { animation-delay: 1000ms; }
}
`;
  fs.writeFileSync('src/index.css', css);
  console.log('Appended animation delays to src/index.css');
} else {
  console.log('Animation delays already exist in src/index.css');
}
