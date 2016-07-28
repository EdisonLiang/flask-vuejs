import Vue from 'vue'
import App from './components/App.vue'

require('materialize-css/dist/css/materialize.css');

new Vue({
  el: 'body',
  components: {
    app: App
  }
})