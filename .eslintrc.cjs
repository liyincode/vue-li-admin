module.exports = {
    // 设置为 true 后，ESLint 将停止在父级目录中查找配置文件 .eslintrc.js 来校验
    root: true,
    // 指定运行环境的全局变量
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "vue/block-order": ["error", {
            "order": ["template", "script", "style"]
        }]
    }
}
