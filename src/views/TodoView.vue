<script setup lang="ts">
  import { ref } from 'vue';
import { addTodo, getTodos } from '../api/todos';
import type { Todo } from '@/types/TodoItem';
import TodoList from '@/components/TodoList.vue';
import FooterMenu from '@/components/FooterMenu.vue';
import NewTodoInputField from '@/components/NewTodoInputField.vue';

  const todosList = ref<Todo[]>([]);
  const tempTodo = ref<Todo>();
 

  const handleLoadTodos = () => {
    getTodos()
      .then(response => {
        todosList.value = [...response];
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddNewTodo = (
    title: string,
  ) => {
    // event.preventDefault();
    console.log('funct start');

    if (title.trim() !== '') {
      tempTodo.value = {
        id: 0,
        userId: 0,
        title,
        completed: false,
      };

      addTodo(tempTodo.value)
      .then(response => {
        todosList.value = [...todosList.value, response];
      })
      // .catch(() => setErrorType(Errors.ADD));
      
    } else {
      // setErrorType(Errors.EMPTY_TITLE);
    }
  };

  handleLoadTodos();

</script>

<template>
  <div className="todoapp">
      <div className="todoapp__container">
        <h1 className="todoapp__title">todos</h1>

        <div className="todoapp__content">
          <NewTodoInputField
            :hasTodos="todosList.length > 0"
            :isActive="todosList.filter(todo => todo.completed)
              .length === todosList.length"
            @handleAddNewTodo="handleAddNewTodo"
          />
            <div v-if="true">
              <section className="todoapp__main">
                <TodoList :todos="todosList" />
              </section>

              <FooterMenu :todos="todosList" />
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