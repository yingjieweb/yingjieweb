module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/resume/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                prependData: `
                    @import "@/assets/styles/reset.scss";
                    @import "@/assets/styles/helper.scss";
                `
            }
        }
    }
}
