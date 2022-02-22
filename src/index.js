import Button from '../packages/button/index.js'

const components = [
  Button
]

const install = function(Vue, opts = {}) {
  console.log('install')
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}

