<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { addTodo, deleteTodos, getTodos } from '../api/todos';
  import type { Todo } from '@/types/TodoItem';
  import TodoList from '@/components/TodoList.vue';
  import FooterMenu from '@/components/FooterMenu.vue';
  import NewTodoInputField from '@/components/NewTodoInputField.vue';
  import { TodoStatus } from '@/types/TodoStatus';

  const todosList = ref<Todo[]>([]);
  const visibleTodos = ref<Todo[]>([]);
  const tempTodo = ref<Todo>();
  const status = ref<TodoStatus>(TodoStatus.ALL);
 

  const handleLoadTodos = () => {
    getTodos()
      .then(response => {
        todosList.value = [...response];
        visibleTodos.value = [...todosList.value];
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleAddNewTodo = (
    title: string,
  ) => {
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

  const handleFilterTodos = (newStatus: TodoStatus) => {
    status.value = newStatus;

    switch (newStatus) {
      case TodoStatus.COMPLETED:
        visibleTodos.value = todosList.value.filter(todo => todo.completed);
        break;
      case TodoStatus.ACTIVE:
      visibleTodos.value = todosList.value.filter(todo => !todo.completed);
        break;
      default:
      visibleTodos.value = [...todosList.value];
    }
  };

  const handleDeleteTodo = (ids: number[]) => {
    deleteTodos(ids)
      .then(() => {
        todosList.value = todosList.value.filter(todo => !ids.includes(todo.id));
      })
      // .catch(() => setErrorType(Errors.DELETE));
  };

  watch(
    () => todosList.value,
    (newValue) => {
      visibleTodos.value = [...newValue];
    },
    { deep: true }
  );



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
                <TodoList 
                  :todos="visibleTodos" 
                  @handleDeleteTodo="handleDeleteTodo"
                />
              </section>

              <FooterMenu 
                :todos="todosList"
                @handleFilterTodos="handleFilterTodos"
               />
            </div>
         
        </div>
        <!-- {
          errorType
          && <ErrorMessage
            handleSetError={setErrorType}
            errorType={errorType}
          />
        } -->
      </div>
    </div>
</template>