<template>
  <div class="contact">
    <h1 v-if="warning">Add some text</h1>
    <h1 v-else>Todos</h1>
    <form @submit.prevent="onSubmit">
      <div class="container">
        <input
          type="text"
          name="todo"
          id="todo"
          v-model="newTodo"
          autocomplete="false"
          autocorrect="false"
        />
      </div>
      <button type="submit">Add</button>
    </form>
    <transition-group
      v-if="todos.length > 0"
      tag="ul"
      @beforeEnter="beforeEnter"
      @enter="enter"
      @beforeLeave="beforeLeave"
      @leave="leave"
    >
      <li
        v-for="(text, index) in todos"
        :key="index"
        @click="toggleTodo(text)"
        :class="text.done ? 'done' : ''"
        :data-key="index"
      >
        {{ text.text }}
        <span class="material-icons" @click="deleteTodo(index)"> delete </span>
      </li>
    </transition-group>
    <div v-else>No Todos found</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { todos } from "../state";
import { Todo } from "../types";
import gsap from "gsap";
gsap.registerPlugin(ScrollToPlugin);

export default defineComponent({
  name: "Home",

  setup() {
    const newTodo = ref("");
    const warning = ref(false);

    const onSubmit = () => {
      const below = window.pageYOffset;

      gsap.to(window, {
        scrollTo: below + 100,
      });
      newTodo.value
        ? todos.value.push({
            done: false,
            text: newTodo.value,
          })
        : (warning.value = true);
      newTodo.value = "";
    };


    const toggleTodo = (todo: Todo) => {
      todo.done = !todo.done;
    };

    const beforeEnter = (el: any) => {
      gsap.from(el, {
        y: -50,
        opacity: 0,
        ease: "ease-in",
      });
    };
    const enter = (el: any) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        ease: "ease-in",
        delay: el.dataset.key * 2,
      });
    };
    const beforeLeave = (el: any) => {
      gsap.from(el, {
        y: 0,
        opacity: 1,
        ease: "ease-out",
      });
    };

    const leave = (el: any) => {
      gsap.to(el, {
        y: -20,
        opacity: 0,
        ease: "ease-out",
        delay: el.dataset.key * 200,
      });
    };

    const deleteTodo = (index: number) => {
      todos.value.splice(index, 1);
    };

    return {
      todos,
      newTodo,
      onSubmit,
      toggleTodo,
      enter,
      beforeEnter,
      warning,
      deleteTodo,
      beforeLeave,
      leave,
    };
  },
});
</script>

<style scoped>
.home {
  text-align: center;
}

ul {
  padding: 2px;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
}
li {
  list-style-type: none;
  background: rgb(255, 98, 98);
  color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 2px;
  line-height: 1.5em;
  text-overflow: ellipsis;
}
.done {
  background: rgb(47, 255, 6);
  color: rgb(255, 255, 255);
}
</style>