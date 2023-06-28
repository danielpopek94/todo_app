<script setup lang="ts">
	const completed = true;
	const isLoading = true;

	defineProps(['todo']);
</script>

<template>
	<div :class="{'todo': true, 'completed': completed}" key={id}>
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
              
            >
              ×
            </button>
      <div :class="{'modal overlay': true, 'is-active': isLoading}">
        <div class="modal-background has-background-white-ter"></div>
        <div class="loader"></div>
      </div>
    </div>
</template>