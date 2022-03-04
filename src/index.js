/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Card from '../packages/card/index.js';
import Alert from '../packages/alert/index.js';
import Icon from '../packages/icon/index.js';

const components = [
  Button,
  Card,
  Alert,
  Icon
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install
}
