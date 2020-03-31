<template>
  <div>{{ timerCount }}</div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 10,
      done: false
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.timerFinished();
        }
      },
      immediate: true
    }
  },

  methods: {
    timerFinished() {
      this.done = true;
      let timerFinished = true;
      this.$emit("timerFinished", timerFinished);
    }
  }
};
</script>