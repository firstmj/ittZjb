module.exports = {
    configureWebpack: {
      devServer: {
        // host真机测试用，为本机ip地址
        // host: '192.168.3.17',
        proxy: {
            '/api': {
                target: 'http://121.40.78.172:8000',  // target host
                ws: true,
                changeOrigin: true,  // 这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host，但是不会修改别的
                pathRewrite: {
                  '^/api': '/'  // rewrite path
                }
            },
        }
    }
    }
}