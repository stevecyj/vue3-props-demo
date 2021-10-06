<script>
import { ref, onMounted } from 'vue';
export default {
  emits: {
    CallBack: (num) => {
      return num.value === 0;
    },
  },
  setup(props, { emit }) {
    const num = ref(1);

    onMounted(() => {
      emit('CallBack', num);
    });

    return { num };
  },
};
</script>

<template>
  <h1>{{ num }}</h1>
</template>

<style></style>
