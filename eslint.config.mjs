import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Standalone CommonJS tooling scripts at the repo root. These are run
    // directly with Node (not part of the Next.js app bundle), so require() is
    // expected here.
    files: [
      "analyze-svgs.js",
      "analyze_insights_svg.js",
      "extract.js",
      "extract-icons.js",
      "scaffold.js",
    ],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
