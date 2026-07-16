const fs = require('fs');
const path = require('path');
const dir = 'public/call';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg')).sort();

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Extract key shape info
  const viewBox = (content.match(/viewBox="([^"]+)"/) || ['','?'])[1];
  const w = (content.match(/width="(\d+)"/) || ['','?'])[1];
  const h = (content.match(/height="(\d+)"/) || ['','?'])[1];
  
  // Get stroke/fill colors
  const colorMatches = content.match(/(stroke|fill)="(#[A-Fa-f0-9]{3,8}|white)"/g) || [];
  const colors = [...new Set(colorMatches)].join(', ');
  
  // Count paths
  const pathCount = (content.match(/<path/g) || []).length;
  
  // Get first path d attribute (truncated)
  const firstD = (content.match(/d="([^"]{1,80})/) || ['','none'])[1];
  
  console.log(`${f} (${w}x${h}) paths=${pathCount} ${colors}`);
  console.log(`  d="${firstD}..."`);
  console.log();
});
