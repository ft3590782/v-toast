<template>
  <div v-show='visible' class='toast'>
    <i>{{message}}</i>
  </div>
</template>

<script>
  export default {
    name: "toast",
    data(){
      return {
        message:"",
        visible:true
      }
    }
  }
</script>

<style lang='scss' scoped>
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
    border-radius: 20px;
    padding: 30px 34px;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
</style>