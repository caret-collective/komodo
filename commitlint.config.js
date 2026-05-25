import { defineConfig } from 'cz-git';

// @ts-check

const commitScopes = ['tour list', 'tour view', 'tour zoom', 'deps', 'deps-dev', 'release', 'README', 'site'];

export default defineConfig({
	extends: ['@commitlint/config-conventional'],
	rules: {
		'scope-enum': [2, 'always', commitScopes],
		'body-max-line-length': [0, 'always', 100],
		'footer-max-line-length': [0, 'always', 100],
	},
	prompt: {
		allowCustomScopes: false,
		enableMultipleScopes: false,
		customScopesAlign: 'top',
	},
});
