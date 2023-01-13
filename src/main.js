// Base imports.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global components import.
import BaseBadge from './components/ui/BaseBadge.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseSpeciality from './components/ui/BaseSpeciality.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'

const app = createApp(App);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-speciality', BaseSpeciality);
app.component('base-spinner', BaseSpinner)
app.use(store).use(router).mount('#app')

