<template>
  <div></div>
</template>
<script>
import utils from './index.js'
export default {
  data () {
    return {
      showMark: utils.docCookie.getItem('ea82410c7a9991816b5eeeebe195e20a') // 获取不到 为null
    }
  },
  mounted () {
    if (!utils.docCookie.getItem('ea82410c7a9991816b5eeeebe195e20a')) {
      //点击后的标记处理  有标记不让点击
      utils.docCookie.setItem(
        // 设置标识凌晨自动清除
        'ea82410c7a9991816b5eeeebe195e20a',
        true, // 值
        utils.dateOfWeeHours() // cookie 过期时间 当前凌晨
      )
    }
    
    const str = '' // 缓存的时间
    if (new Date(str).toDateString() !== new Date().toDateString()) {
      // 不同代表隔天
    }
  },
  destroyed () {}
}
</script>
<style></style>
