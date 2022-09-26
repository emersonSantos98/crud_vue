import 'vuetify/styles'



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'



/*
    Font Awesome Icons
*/
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
/*
    Bootstrap css , js
*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./styles.css"; // main css file  




loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
