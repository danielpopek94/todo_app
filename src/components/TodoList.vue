<script setup lang="ts">
	import TodoItem from '@/components/TodoItem.vue';

	defineProps(['todos']);

</script>

<template>
  <div class="about">
    <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id"/>
  </div>
</template>