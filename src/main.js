import { createApp } from "vue";
import "./style.css";
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeicons/primeicons.css'
import App from "./App.vue";




import Menubar from 'primevue/menubar';
import PrimeVue from "primevue/config";
import Ripple from 'primevue/ripple';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const app = createApp(App)
app.use(PrimeVue);

//Components
app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('Button', Button);


//Directives
app.directive('ripple', Ripple);

app.mount("#app");
