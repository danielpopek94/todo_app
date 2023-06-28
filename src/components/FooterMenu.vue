<script setup lang="ts">
  import { ref } from 'vue';
import { getTodos } from '../api/todos';
import type { Todo } from '@/types/TodoItem';
import TodoList from '@/components/TodoList.vue';



</script>

<template>
  <footer className="todoapp__footer">
      <span className="todo-count">
        {`${itemsLeft} items left`}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={`filter__link ${status === TodoStatus.ALL ? 'selected' : ''}`}
          onClick={() => handleFilterTodos(TodoStatus.ALL)}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${status === TodoStatus.ACTIVE ? 'selected' : ''}`}
          onClick={
            () => handleFilterTodos(TodoStatus.ACTIVE)
          }
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${status === TodoStatus.COMPLETED ? 'selected' : ''}`}
          onClick={
            () => handleFilterTodos(TodoStatus.COMPLETED)
          }
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        onClick={() => handleClearCompleted()}
        disabled={itemsCompleted === 0}
      >
        Clear completed
      </button>

    </footer>
</template>