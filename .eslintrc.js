module.exports = {
    settings: {
        react: {
            version: "detect",
        },
    },
    env: {
        browser: true,
        node: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "eslint:recommended",
        "eslint-config-prettier",
        "plugin:react/recommended",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": ["error", {}],
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".js", ".jsx"] },
        ],
    },
}
