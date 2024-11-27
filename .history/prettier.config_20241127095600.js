
module.exports = {
  printWidth: 100, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数，默认为80
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  semi: false, // 声明结尾使用分号(;)，默认为true
  vueIndentScriptAndStyle: false, // vue文件中的script和style标签是否缩进，默认为false
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  quoteProps: 'as-needed', // 对象的key仅在必要时用引号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格，默认为true，效果：{ foo: bar }
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  arrowParens: 'always', // 只有一个参数的箭头函数的参数是否带圆括号（“always”）还是不带圆括号（“avoid”），默认avoid
  insertPragma: false, // 不需要写文件开头的 @prettier
  requirePragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'never', // 是否要换行
  htmlWhitespaceSensitivity: 'strict', // 指定HTML文件的全局空白区域敏感度。strict ignore sensitive
  endOfLine: 'auto', // 行尾换行符<lf|crlf|cr|auto>，默认lf
  rangeStart: 0, // 范围开始
  ignorePath: ['dist/**'] ,// 忽略路径
  // 在 HTML、Vue 和 JSX 中强制执行每行单个属性<bool>，默认false
  singleAttributePerLine: true,
  embeddedLanguageFormatting: 'auto', // 是否格式化嵌入式代码
  //多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）<bool>，默认false
  bracketSameLine: true,
}
