<template>
  <transition name="fade" mode="out-in" appear>
    <div v-show="visible" ref="toast" class="toast">
      <i>{{ message }}</i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message: "",
      visible: true
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    this.$refs.toast.classList.add("fade-in");
  },
  destroyed() {
    console.log("destory");
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  word-wrap: break-word;
  text-align: center;
  z-index: 888;
  max-width: 80%;
  color: #fff;
  border-radius: 8px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
