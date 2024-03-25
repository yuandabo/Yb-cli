/**
 * @type {import('rollup').RollupOptions}
 */
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
// import alias from "@rollup/plugin-alias";
//
// const path = require('path')
// const resolveDir = dir => path.join(__dirname, dir)
export default {
    input: 'src/main.ts',
    output:{
        file:'dist/bundle.js',
        format: 'cjs',
        name:'A',  //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        sourcemap:true  //生成bundle.map.js文件，方便调试
    },
    plugins: [
        typescript(),
        // alias({
        //     entries: [{
        //         find: '@', replacement: resolveDir('src')
        //     }]
        // }),
        serve({
            open: true,
            port: 8888,
            contentBase: ''
        })
    ]
};