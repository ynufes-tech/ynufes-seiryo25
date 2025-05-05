import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'off', // allow unused variables
            'vue/multi-word-component-names': 'off', // allow single word component names
        }
    }
    // your custom flat configs go here, for example:
    // {
    //   files: ['**/*.ts', '**/*.tsx'],
    //   rules: {
    //     'no-console': 'off' // allow console.log in TypeScript files
    //   }
    // },
    // {
    //   ...
    // }
)
