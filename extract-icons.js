const fs = require('fs');
const data = JSON.parse(fs.readFileSync('step0.jsonl', 'utf8'));
const html = data.content;

// The icons in the original HTML were drawn using multiple div outlines.
// But wait, the user's figma export gave them as SVGs. 
// Maybe the user's original HTML *did* have the SVG paths for the other sections?
// Let's just find ANY <svg> tags near "Capture commitments", "Respond faster", "Stay governed".
const titles = ["Capture commitments", "Respond faster", "Stay governed"];
for (const title of titles) {
    const idx = html.indexOf(title);
    if (idx === -1) continue;
    
    // Look backwards for an <svg> tag.
    const beforeStr = html.substring(Math.max(0, idx - 1500), idx);
    const svgMatches = [...beforeStr.matchAll(/<svg[^>]*>([\s\S]*?)<\/svg>/gi)];
    if (svgMatches.length > 0) {
        console.log(`\n--- ${title} ---`);
        console.log(svgMatches[svgMatches.length - 1][0]);
    }
}
