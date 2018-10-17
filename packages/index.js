import loadingCheshi from '../packages/loadingCheshi/index.js';
import WButton from '../packages/button/index.js';
import WRow from '../packages/row/index.js';
import WCol from '../packages/col/index.js';
import WTable from '../packages/table/index.js';
import WThead from '../packages/thead/index.js';
import WPage from '../packages/page/index.js';
import WTag from '../packages/tag/index';
import WShowMore from '../packages/show-more/index';
import WLimitTextArea from '../packages/limit-textarea/index';
import WAlert from '../packages/alert/index';
import WLoadingBar from '../packages/loading-bar/index';
const components = [
  loadingCheshi,
  WButton,
  WRow,
  WCol,
  WTable,
  WThead,
  WPage,
  WTag,
  WShowMore,
  WLimitTextArea,
  WAlert,
]


const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
// ...
  Vue.prototype.$loading = WLoadingBar
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  loadingCheshi,
  WButton,
  WRow,
  WCol,
  WTable,
  WThead,
  WPage,
  WTag,
  WShowMore,
  WLimitTextArea,
  WAlert,
 WLoadingBar
}


