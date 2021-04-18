
import { defineConfig } from 'umi'
import routes from './routes'
export default defineConfig({

  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  //代理
  proxy: {
    '/api': {
      target: 'https://elm.cangdu.org/v2',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },

    // 别名
  alias: {
      '@@@': path.resolve(__dirname, '../src/components'),
  },
  dva: {
      immer: true,
      // 启用 dva model 的热更新
      hmr: false,
  },
  
  fastRefresh: {},

})



