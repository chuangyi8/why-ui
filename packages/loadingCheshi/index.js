import loadingCheshi from './src/loadingCheshi.vue';

loadingCheshi.install = function (Vue) {
    Vue.component(loadingCheshi.name, loadingCheshi);
};

export default loadingCheshi;