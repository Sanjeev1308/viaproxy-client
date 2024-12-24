import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-unused-vars': [
        'warn', // Or "error" if you want to treat unused variables as errors
        {
          vars: 'all',
          args: 'after-used', // Can also be "none" or "all"
          ignoreRestSiblings: false,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn', // "error" for errors, "warn" for warnings
        {
          vars: 'all', // Check all variables
          args: 'after-used', // Check arguments only after they're used
          ignoreRestSiblings: false, // Don't ignore rest siblings in destructuring
        },
      ],
    },
  },
);
