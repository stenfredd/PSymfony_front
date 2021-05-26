import './styles/app.css'
import './styles/bootstrap.min.css'

import Vue from 'vue'

import App from './components/App'

new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
