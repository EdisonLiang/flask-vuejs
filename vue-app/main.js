import Vue from 'vue'
import App from './components/App.vue'

require('bulma/css/bulma.css');

new Vue({
  el: '#app-container',
  components: {
    app: App
  }
})