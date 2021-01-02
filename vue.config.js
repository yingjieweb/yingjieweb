module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/yingjieweb/'
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
