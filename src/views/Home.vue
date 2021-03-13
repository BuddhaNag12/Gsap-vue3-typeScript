<template>
  <div class="contact">
    <h1>Home</h1>
   <section id="first">
      <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
   </section>
   <section id="second">
      <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
   </section>
   <section id="third">
      <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
   </section>
   <section id="fourth">
      <transition-group
      appear
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
   </section>
   
    <button @click="ScrollToTop">ScrollToTop</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import gsap from "gsap";
gsap.registerPlugin(ScrollToPlugin);

export default defineComponent({
  name: "Home",

  setup() {
    const icons = ref([
      { name: "alternate_email", text: "by email" },
      { name: "local_phone", text: "by phone" },
      { name: "local_post_office", text: "by post" },
      { name: "local_fire_department", text: "by smoke signal" },
    ]);
    const beforeEnter = (el: any) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el: any, done: any) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };
    // const afterEnter = (el: Element) => {
    //   gsap.to(el, {
    //     opacity: 0,
    //     y: -100,
    //     duration: 0.8,
    //     delay: 1,
    //   });
    // };
    const ScrollToTop = () => {
      gsap.to(window,{scrollTo:0,duration:1,ease:'ease'})
    };

    return { icons, beforeEnter, enter,ScrollToTop };
  },
});
</script>

<style scoped>
.home {
  text-align: center;
}

.contact ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  max-width: 400px;
  margin: 60px auto;
}
.contact li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
}
</style>