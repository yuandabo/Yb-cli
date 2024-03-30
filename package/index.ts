import Button from './Button/Button.vue';
// import { App } from 'vue';
const components = [Button];
const install = function (app: any) {
    // 遍历注册全局组件
    components.map((component: any) => app.use(component));
};
export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    Button
};
