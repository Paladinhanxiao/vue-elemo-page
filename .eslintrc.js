module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// allow paren-less arrow functions 零表示忽略规则检查
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development 是否允许debugger
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'semi': ['error', 'always'],
		'indent': 0,
		'space-before-function-paren': 0,
		"no-tabs":"off"
	}
}
