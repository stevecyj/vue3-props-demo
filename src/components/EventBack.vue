<script>
export default {
  setup() {
    const handClickFn = (e) => {
      console.log(e.target);
    };
    return { handClickFn };
  },
};
</script>

<template>
  <a @click="handClickFn($event)" href="javascript:;">click</a>
</template>

<style scoped>
a {
  font-size: 50px;
  color: #fff;
}
</style>
