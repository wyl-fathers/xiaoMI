module.exports = {
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://m.mi.com',
        // ws: true,
        changeOrigin: true,
        headers: {
          Referer: 'https://m.mi.com/'
        }
      }

      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
}
