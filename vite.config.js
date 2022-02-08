import path from 'path';

// 服务端口
module.exports = {
    alias:{
        '/@/': path.resolve(__dirname, './src')
    },
    port: 8077, 
    proxy: { 
      "/foo": "http://localhost:4567/foo",
      "/api": {
        target: "xxx",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  };