<template>
  <div class="box">
    <p>商品名称：{{ name }}</p>
    <p>商品价格：{{ price }}</p>
    <p>商品编号：{{ id }}</p>
    <button @click="doClick">点我砍一刀</button>
  </div>
</template>

<script>
export default {
  name: 'MyGoods',
  // 父传子 当成子组件中的data即可，直接用
  //props: ["属性名"] 数组写法，没有开启校验
  //props: { 属性名：校验规则 } 对象写法，开启校验
  // props: ['name','price','id'],
  props: {
    name: String,
    price: {
      // 给前面父组件传来的属性前加 :
      type: Number,
      default: 100
    },
    id: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    doClick() {
      // 子传父：自定义事件
      // this.$emit('自定义事件名',事件对象（参数）)
      // 这里传过来的就是事件对象默认参数$event 写谁传谁
      this.$emit('price', this.id)
    }
  }
}
</script>

<style scoped>
/* */
.box {
  border: 2px solid purple;
}
</style>
