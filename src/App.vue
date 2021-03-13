<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<style>
#app {
  font-family: "Nunito Sans", sans-serif;
}
html,
body {
  box-sizing: border-box;
  padding: 0%;
  margin: 0%;
  text-align: center;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.75s ease-out;
  transform: translateY(0);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
