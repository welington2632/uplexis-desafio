import Vue from 'vue'
import App from './App.vue'
import feather from 'vue-icon'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(feather, 'v-icon')
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
