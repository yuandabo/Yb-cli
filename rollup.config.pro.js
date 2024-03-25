/**
 * @type {import('rollup').RollupOptions}
 */
import typescript from "@rollup/plugin-typescript";
import  resolve from  '@rollup/plugin-node-resolve'
import alias from "@rollup/plugin-alias";

// const path = require('path')
// const resolveDir = dir => path.join(__dirname, dir)
export default {
    input: 'src/main.ts',
    output:{
        file:'dist/bundle.js',
        format: 'cjs',
        name:'A',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        sourcemap:false  //生成bundle.map.js文件，方便调试
    },
    plugins: [
        typescript(),
        resolve(),

        // alias({
        //     entries: [{
        //         find: '@', replacement: resolveDir('src')
        //     }]
        // }),
    ]
};