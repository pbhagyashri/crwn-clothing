module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'comma-dangle': ['error', 'always-multiline'],
		'import/no-duplicates': ['error', { considerQueryString: true }],
		'no-use-before-define': [
			'error',
			{ functions: true, classes: true, variables: true },
		],
		'no-debugger': 'error',
		'no-dupe-keys': 'error',
		'no-unreachable': 'error',
		'no-import-assign': 'error',
		'multiline-ternary': ['error', 'never'],
		semi: ['error', 'always'],
	},
};
