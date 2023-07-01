<script setup lang="ts">
	import { ref } from 'vue';

	defineProps([
		'hasTodos', 
		'isActive', 
		'handleToggleTodos',
	]);

  const emit = defineEmits(['handleAddNewTodo'])

	const title = ref<string>('');

	function handleAddNewTodo() {
		emit('handleAddNewTodo', title.value);
    title.value = '';
	}

</script>

<template>
	<header class="todoapp__header">
        <button
					v-if="hasTodos"
          type="button"
          :class="{'todoapp__toggle-all': true, 'active': isActive}"
          
        />

      <form @submit="handleAddNewTodo">
        <input
          type="text"
          class="todoapp__new-todo"
          placeholder="What needs to be done?"
          v-model="title"
        />
      </form>
    </header>
</template>