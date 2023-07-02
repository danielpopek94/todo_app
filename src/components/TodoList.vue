<script setup lang="ts">
	import TodoItem from '@/components/TodoItem.vue';

	defineProps(['todos']);
  const emit = defineEmits(['handleDeleteTodo']);

  const handleDeleteTodo = (id: number[]) => {
    emit('handleDeleteTodo', id);
  }

</script>

<template>
  <div class="about">
    <TodoItem
    v-for="todo in todos"
    :todo="todo"
    :key="todo.id"
    @handleDeleteTodo="handleDeleteTodo"
    />
  </div>
</template>