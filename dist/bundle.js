'use strict';

var vue = require('vue');

const _hoisted_1 = /*#__PURE__*/ vue.createElementVNode("button", null, "test", -1 /* HOISTED */);
const _hoisted_2 = [
    _hoisted_1
];
var script = /*#__PURE__*/ vue.defineComponent({
    __name: 'Button',
    setup(__props) {
        console.log('button component welcome!');
        return (_ctx, _cache) => {
            return (vue.openBlock(), vue.createElementBlock("div", null, [..._hoisted_2]));
        };
    }
});

script.__file = "package/Button/Button.vue";

// import { App } from 'vue';
const components = [script];
const install = function (app) {
    // 遍历注册全局组件
    components.map((component) => app.use(component));
};
var index = {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    Button: script
};

module.exports = index;
