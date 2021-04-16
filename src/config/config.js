import { defineConfig } from 'umi'
import routes from './routes'
export default defineConfig({
    nodeModulesTransform: {
        type: 'none'
    },

    routes,   //路由

    //代理
    proxy: {
        '/api': {
          target: 'https://blogs.zdldove.top',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
    },
    
      // 别名
    // alias: {
    //     '@@@': path.resolve(__dirname, '../src/components'),
    // },
    dva: {
        immer: true,
        // 启用 dva model 的热更新
        hmr: false,
    },

})