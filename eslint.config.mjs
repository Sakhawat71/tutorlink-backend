import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.ts"], // Only lint `.ts` files
    },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: [
            "**/*.js",
            "dist/**",
            ".node_modules/*"
        ],
    },
    {
        rules: {
            "no-unused-vars": "warn",
            "no-console": "warn",
            "eqeqeq": "warn",
            'no-undef': 'error',
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-unused-vars" : "off",
        },
    }
];
