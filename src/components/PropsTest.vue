<script>
export default {
  props: {
    str: {
      type: String,
      default: 'gogococo',
    },
    bool: {
      type: Boolean,
      default: true,
    },
    num: {
      type: Number,
      default: 0,
    },
    arr: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
    handclicfn: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    console.log(props);
    return { props };
  },
};
</script>

<template>
  <h1>JOJO {{ props.str }}</h1>
</template>

<style>
h1 {
  color: aqua;
  font-size: 50px;
}
</style>
