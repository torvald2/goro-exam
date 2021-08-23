import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import dataMap from './modules/dataMap'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],

    modules: {
        dataMap
    },
})