module.exports = {
    extends: 'standard-with-typescript',
    parserOptions: {
        project: './tsconfig.eslint.json'
    },
    env: {
        node: true
    }
    // rules: {
    //     semi: [2, "never"]
    // }
}