const fs = require('fs');
const data = JSON.parse(fs.readFileSync('step0.jsonl', 'utf8'));
const html = data.content;
const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]{0,150}(Capture commitments|Respond faster|Stay governed|Call|Capture|Draft|Assign|Sync|Track)/gi;
const matches = [...html.matchAll(regex)];
console.log(matches.map(m => m[2] + ' = ' + m[1]).join('\n'));
