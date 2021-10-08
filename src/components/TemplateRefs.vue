<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    // const textBar = ref(null);
    const num = ref(123456789);

    onMounted(() => {
      // textBar.value.focus();
    });
    return { num };
  },
};
</script>

<template>
  <input
    v-model="num"
    v-focus
    type="text"
    id="textBar"
    placeholder="input text"
  />
  <h1 v-price="num"></h1>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  background-color: rgb(200, 219, 219);
  padding-left: 10px;
}
</style>
