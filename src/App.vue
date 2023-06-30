<template>
  <div class="box">
    <h1>我是根组件</h1>
    <!-- 子组件 -->
    <!-- 加上冒号可以解析 -->
    <!-- <my-goods name="mzz" :price="30000" id="66"></my-goods> -->
    <!-- <my-goods id="77"></my-goods> -->

    <my-goods v-for="item in list" :key="item.id" 
    :name="item.name" 
    :price="item.price" 
    :id="item.id"
    @price="doPrice"></my-goods>
    <!-- 这里不用接收参数，因为是默认事件对象 -->
  </div>
</template>

<script>
// 注册组件
import MyGoods from '@/components/MyGoods.vue'

export default {
  components: {
    MyGoods
  },
  data() {
    return {
      list: [
        { name: '苹果手机', price: 5888, id: 123 },
        { name: '小米手机', price: 1888, id: 456 },
        { name: '华为手机', price: 3666, id: 789 },
      ]
    }
  },
  methods: {
    doPrice(id) {
      console.log(id)
      // 根据id找到哪一件商品
      const item = this.list.find(item => item.id === id)
      // 修改商品价格
      item.price --;
    }
  }
}
</script>

<style scoped>
.box {
  border: 2px solid purple;
}
</style>
