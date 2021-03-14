import { reactive,ref } from 'vue';
import {Shape} from '@/types';

export const state = reactive<Shape>({
    counter: 0,
    name: 'buddha'
})

export const todos = ref([
    {
      text: "Learn vue3",
      done: false,
    },
    {
      text: "Learn gsap",
      done: false,
    },
    {
      text: "Learn gsap animation",
      done: true,
    },
  ]);