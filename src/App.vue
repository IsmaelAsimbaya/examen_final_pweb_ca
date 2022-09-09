<template>
  <router-view />
</template>

<script>
import Clientes from "./components/Clientes.vue";
import Empleados from "./components/Empleados.vue";

export default {
  name: "App",
  components: {
    Clientes,
    Empleados
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
