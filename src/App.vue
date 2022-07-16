<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  nome : 'App',
  components : { NavBar}
}
</script>
<style>

</style>
