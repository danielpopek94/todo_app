<script setup lang="ts">
  import { ref } from 'vue';
import { getTodos } from '../api/todos';
import type { Todo } from '@/types/TodoItem';
import TodoList from '@/components/TodoList.vue';
import FooterMenu from '@/components/FooterMenu.vue';

  const todoList = ref<Todo[]>([]);
 

  const handleLoadTodos = () => {
    getTodos()
      .then(response => {
        todoList.value = [...response];
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLoadTodos();

</script>

<template>
  <div className="todoapp">
      <div className="todoapp__container">
        <h1 className="todoapp__title">todos</h1>

        <div className="todoapp__content">
          <!-- <NewTodoInputField
            hasTodos={todosList.length > 0}
            isActive={todosList.filter(todo => todo.completed)
              .length === todosList.length}
            handleAddNewTodo={handleAddNewTodo}
            handleCompleteAll={handleCompleteAll}
          /> -->
         
            <div v-if="true">
              <section className="todoapp__main">
                <TodoList :todos="todoList" />
              </section>

              <FooterMenu :todos="todoList" />
            </div>
         
        </div>
        {
          errorType
          && <ErrorMessage
            handleSetError={setErrorType}
            errorType={errorType}
          />
        }
      </div>
    </div>
</template>