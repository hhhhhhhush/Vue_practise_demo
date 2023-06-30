<template>
  <div class="todoapp">
    <todo-header :arr="list" @add="doAdd"></todo-header>
    <todo-main :arr="list" @del="list.splice($event, 1)"></todo-main>
    <todo-footer :arr="list" @clearAll="clearAll"></todo-footer>
  </div>
</template>

<script>
// 1.导入css样式
import '@/assets/css/base.css'
import '@/assets/css/index.css'
// 2.导入局部组件
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      list: [
        { name: '吃饭', isDone: true },
        { name: '睡觉', isDone: false },
        { name: '打豆豆', isDone: true }
      ]
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods: {
    // doClear() {
    //   // 把打钩的删除？ === 筛选出没有打钩的元素
    //   // filer不会修改原数组所以页面不更新
    //   // 解决 ： 对数组重新赋值
    //   this.list = this.list.filter(item => !item.isDone)
    // },
    doAdd(e) {
      this.list.push({
        name: e,
        isDone: false
      })
    },
    clearAll() {
      this.list = this.list.filter( item => !item.isDone )
    }
  }
}
</script>

<style scoped></style>
