import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import './assets/styles/index.css'
import store from './store'
import VueTailwind from 'vue-tailwind'
import VueRouter from 'vue-router'
import TestComponent from '@/components/Test.vue'
import MapComponent from '@/components/TestContent.vue'
import MainPage from '@/components/MainPage.vue'
import BirthMap from '@/components/BirthMap.vue'

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


Vue.use(VueRouter)
const routes = [
  {
    path: "/test",
    component: TestComponent,
  },
  {
    path: "/map",
    component: MapComponent,
  },
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/birth_map",
    component: BirthMap,
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
