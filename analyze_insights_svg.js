const fs = require('fs');
const dir = 'public/insights';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
files.forEach(f => {
  const content = fs.readFileSync(dir + '/' + f, 'utf8');
  const matchW = content.match(/width="([^"]+)"/);
  const matchH = content.match(/height="([^"]+)"/);
  console.log(f, `${matchW ? matchW[1] : '?'}x${matchH ? matchH[1] : '?'}`, content.length, 'bytes');
});
