module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~@/variables.sass"`,
                modules: {
                    auto: () => true
                }
            }
        }
    }
}