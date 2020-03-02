import toast from '@/components/toast.vue'
let Toast = {}

Toast.install = function (Vue, options) {
  const TOAST = Vue.extend(toast)
  let remove = event => {

    if (event.parentNode.childNodes.length > 1) {
      event.parentNode.removeChild(event)
    } else {
      event.parentNode.parentNode.removeChild(event.parentNode)
    }
  }
  // 实现toast的关闭方法
  TOAST.prototype.close = function () {
    this.visible = false
  }

  Vue.prototype.$toast = option => {
    var instance = new TOAST().$mount(document.createElement('div'))
    let duration = option.duration || 3000
    instance.message = typeof option === 'string' ? option : option.message
    // 将toast的DOM挂载到DOM上
    document.body.appendChild(instance.$el)
    // 自动关闭功能的实现
    setTimeout(function () {
      instance.close()
      remove(instance.$el)
    }, duration)
  }
}

export default Toast
