<script>
export default {
  props: ['msg'],
  setup(props) {
    return { props };
  },
};
</script>

<template>
  <h1>JOJO {{ props.msg }}</h1>
</template>

<style>
h1 {
  color: aqua;
  font-size: 50px;
}
</style>
