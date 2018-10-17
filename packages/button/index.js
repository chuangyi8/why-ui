import WButton from './src/button.vue';

WButton.install = function (Vue) {
    Vue.component(WButton.name, WButton);
};

export default WButton;