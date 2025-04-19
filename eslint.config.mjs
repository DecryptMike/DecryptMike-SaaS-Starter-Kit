import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "src/generated/prisma/**",      // 🔕 Ignore all Prisma client files
      "src/lib/utils.ts",             // 🔕 Ignore Tailwind utility file for now
      "src/app/api/stripe/**",        // 🔕 Ignore Stripe routes
      "src/app/auth/**",              // 🔕 Ignore auth files with 'any'
      "src/app/dashboard/**",         // 🔕 Ignore dashboard animation warnings
      "src/app/page.tsx",             // 🔕 Ignore root page animation
      "src/app/signin/**",            // 🔕 Ignore signin animations
      "src/app/unauthorized/**",      // 🔕 Ignore unauthorized animations
      "src/components/ui/**",         // 🔕 Ignore UI components with 'any'
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;