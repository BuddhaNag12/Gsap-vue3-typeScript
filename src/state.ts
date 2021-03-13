import { reactive } from 'vue';


interface Shape {
    counter: number;
    name: string;
}

export const state = reactive<Shape>({
    counter: 0,
    name: 'buddha'
})