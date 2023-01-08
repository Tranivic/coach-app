// Base imports.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global components import.
import BaseBadge from './components/ui/BaseBadge.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseSpeciality from './components/ui/BaseSpeciality.vue'

const app = createApp(App);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-speciality', BaseSpeciality);
app.use(store).use(router).mount('#app')

