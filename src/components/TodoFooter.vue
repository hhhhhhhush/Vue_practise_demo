<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong> {{ arr.length }} </strong></span>
    <!-- 这里不用传参数 -->
    <button class="clear-completed" @click="$emit('clearAll')">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    arr: Array
  }
}
</script>
