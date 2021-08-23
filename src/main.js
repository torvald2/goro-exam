import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import './assets/styles/index.css'
import store from './store'
import VueTailwind from 'vue-tailwind'

Vue.config.productionTip = false
Vue.use(VTooltip)

import {
  TSelect,
  TInput
} from 'vue-tailwind/dist/components';
const settings = {
  't-select': {
    component: TSelect,
    props: {
      classes: 'shadow border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    }
  },
  't-input': {
    component: TInput,
    props: {
      classes: 'shadow border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    }
  },
}
Vue.use(VueTailwind, settings)



new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
