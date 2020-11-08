export default {
  proxy: {
    'api': {
      target: 'https://api.github.com',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    }
  }
}
