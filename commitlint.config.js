module.exports = {
    entends: ['@commitlint/config-conventional'],
    rules: {
        "type-case": [2, 'always', 'lowerCase'], // enum 类型为小写
        "type-empty": [2, 'never'], // 类型不能为空
        "subject-case": [2, 'never'], // 内容以空格间隔时写法，范围-英文
        "subject-empty": [2, 'never'], // 内容不允许有空格
        "subject-full-stop": [2, 'never', '.'], // 匹配到描述内容的结尾符号报错
        "header-max-length": [2, 'never', 100], // 首行文本长度不能超过多少
        "type-enum": [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']]
    }
}