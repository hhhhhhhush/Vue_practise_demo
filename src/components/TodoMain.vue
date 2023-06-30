<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li v-for="(item,index) in arr" :key="index">
      <div class="view">
        <input v-model="item.isDone" class="toggle" type="checkbox" />
        <label>{{ item.name }}</label>
        <button @click="$emit('del',index)"  class="destroy"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    arr: Array
  }
}
</script>
