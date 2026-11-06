import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap da npm (prima era caricato da CDN in index.html).
// Il "bundle" include già Popper, che serve per i dropdown.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Stili globali del sito
import './assets/styles/styles.css'
import './assets/styles/stylesresponsive.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
