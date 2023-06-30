<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model="isAll" id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="msg"
      @keyup.enter="$emit('add',msg);msg=''"
    />
    <!-- 一行有两个语法 -->
  </header>
</template>

<script>
export default {
  data () {
    return {
      msg: ""
    }
  },
  props: {
    arr: Array
  },
  methods: {

  },
  computed: {
    isAll: {
      get () {
        return this.arr.every( item => item.isDone )
      },
      set (value) {
        this.arr.forEach( item => item.isDone = value )
      }
    }
  }
}
</script>
