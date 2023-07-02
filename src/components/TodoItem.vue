<script setup lang="ts">
	const isLoading = true;

	defineProps(['todo']);
  const emit = defineEmits(['handleDeleteTodo']);

  const handleDeleteTodo = (id: number) => {
    emit('handleDeleteTodo', [id]);
  }

</script>

<template>
	<div :class="{'todo': true, 'completed': todo.completed}">
      <label class="todo__status-label">
        <input
          type="checkbox"
          class="todo__status"
        />
      </label>

  
            <span
              class="todo__title noselect"
              
            >
              {{todo.title}}
            </span>
            <button
              type="button"
              class="todo__remove"
              @click="() => handleDeleteTodo(todo.id)"
            >
              ×
            </button>
      <!-- <div :class="{'modal overlay': true, 'is-active': false}">
        <div class="modal-background has-background-white-ter"></div>
        <div class="loader"></div>
      </div> -->
    </div>
</template>