/**
 * @type {import('rollup').RollupOptions}
 */
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
// import alias from '@rollup/plugin-alias';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'package/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        // name: 'A', //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
        sourcemap: false //生成bundle.map.js文件，方便调试
    },
    plugins: [
        // alias({
        //     entries: [
        //         {
        //             find: '@',
        //             replacement: new URL('./src', import.meta.url).pathname
        //         }
        //     ]
        // }),
        vue({
            // 把单文件组件中的样式，插入到html中的style标签
            // css: true,
            // 把组件转换成 render 函数
            // compileTemplate: true
            target: 'browser'
        }),
        typescript(),
        resolve(),
        postcss()
    ],
    external: [/^vue(\/.+|$)/, /^ant-design-vue(\/.+|$)/, /^@ant-design\/icons-vue/]
};
