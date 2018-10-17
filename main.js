import loadingCheshi from '../packages/loadingCheshi/index.js';
import WButton from '../packages/button/index.js';
//其中Vue.use(ElementUI);的方式便是间接调用了全局组件注册的方式，在element-ui内部：
//（插件中，使用Vue.use()的方式，相当于调用了其中的install方法）
const components = [
    loadingCheshi,
    WButton
]


const install = function(Vue) {
 // install.installed 已经安装
 if (install.installed) return;
    components.map(component => {
        // 此处注意component.name：组件中需要添加name属性，代表注册的组件名，也可修改成其他
        console.log(component.name)
        Vue.component(component.name, component);
    });
// ...
};


// Vue 是全局变量时，自动 install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

//导出全局install
//按需导入，执行组件文件夹里的，inde.js注册组件
export default {
    install,
    loadingCheshi,
    WButton
}


