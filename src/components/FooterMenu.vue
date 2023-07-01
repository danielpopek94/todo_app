<script setup lang="ts">
import { TodoStatus } from '@/types/TodoStatus';
import { computed, defineProps, ref } from 'vue';

const props = defineProps(['todos']);
const emit = defineEmits(['handleFilterTodos']);
const status = ref<TodoStatus>(TodoStatus.ALL);

const completed = computed(() => {
  return props.todos.filter(todo => todo.completed).length;
});

const itemsLeft = computed(() => {
  return props.todos.length - completed.value;
});

const handleFilterTodos = (selectedStatus: TodoStatus) => {
  status.value = selectedStatus;
  emit('handleFilterTodos', selectedStatus);
};

</script>

<template>
  <footer class="todoapp__footer">
      <span class="todo-count">
       {{itemsLeft}} items left
      </span>

      <nav class="filter">
        <a
          href="#/"
          :class="{'filter__link': true, 'selected': status === TodoStatus.ALL}"
          @click="handleFilterTodos(TodoStatus.ALL)"
        >
          All
        </a>

        <a
          href="#/active"
          :class="{'filter__link': true, 'selected': status === TodoStatus.ACTIVE}"
          @click="handleFilterTodos(TodoStatus.ACTIVE)"
        >
          Active
        </a>

        <a
          href="#/completed"
          :class="{'filter__link': true, 'selected': status === TodoStatus.COMPLETED}"
          @click="handleFilterTodos(TodoStatus.COMPLETED)"
          >
          Completed
        </a>
      </nav>

      <button
        type="button"
        class="todoapp__clear-completed"
      >
        Clear completed
      </button>

    </footer>
</template>