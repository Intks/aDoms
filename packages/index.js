import AlexButton from './button'

const components = [
  AlexButton
]

// 定義 install 方法，接收 Vue 作為參數。如果使用 use 註冊插件，則所有的組件都將被註冊
const install = function (Vue) {
  // 判斷是否安裝
  if (install.installed) return
  // 遍歷註冊全局組件
  components.map(component => Vue.component(component.name, component))
}

// 判斷是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  AlexButton
}
