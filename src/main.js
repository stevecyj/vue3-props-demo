import { createApp } from 'vue';
import App from './App.vue';
import { numPrice } from '@/lib/tool.js';

const app = createApp(App);

app.directive('focus', {
  mounted(el) {
    el.focus();
    // console.log(el);
  },
});

app.directive('price', {
  mounted(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
    console.log(p);
  },
  updated(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
    console.log(p);
  },
});

app.mount('#app');
