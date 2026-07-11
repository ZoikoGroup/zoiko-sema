const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/aparaziitha nitta/zoiko-sema/components/Project-collaboration';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const components = [
  'ProjectCollabHeroSection',
  'WhyProjectCollabSection',
  'ProductShowcaseSection',
  'WorkflowMapSection',
  'ProjectPatternsSection',
  'GovernanceControlsSection',
  'IntegrationsEcosystemSection',
  'TestimonialStatsSection',
  'FAQSection',
  'CTASection'
];

components.forEach(name => {
  const code = `import React from "react";

export function ${name}() {
  return (
    <section className="w-full p-20 flex justify-center items-center text-white text-2xl bg-slate-900 border-b border-white/10">
      ${name}
    </section>
  );
}
`;
  fs.writeFileSync(path.join(dir, `${name}.tsx`), code);
});

const indexCode = components.map(name => `export { ${name} } from './${name}';`).join('\n');
fs.writeFileSync(path.join(dir, 'index.ts'), indexCode);

console.log('Scaffolded all components');
