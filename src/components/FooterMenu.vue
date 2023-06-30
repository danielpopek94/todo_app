<script setup lang="ts">
import { TodoStatus } from '@/types/TodoStatus';
import { computed, defineProps } from 'vue';

const props = defineProps(['todos']);

const completed = computed(() => {
  return props.todos.filter(todo => todo.completed).length;
});

const itemsLeft = computed(() => {
  return props.todos.length - completed.value;
});

const status = 'all';

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
        >
          All
        </a>

        <a
          href="#/active"
          :class="{'filter__link': true, 'selected': status === TodoStatus.ACTIVE}"

        >
          Active
        </a>

        <a
          href="#/completed"
          :class="{'filter__link': true, 'selected': status === TodoStatus.COMPLETED}"
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