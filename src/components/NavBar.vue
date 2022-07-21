<template>
  <!-- <nav class="navbar-dark bg-primary navbar-expand-sm">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <i class="fa fa-mobile"></i>Vue Contact Manager</router-link> 
        </div>
    </nav> -->
    <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand"></a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</template>

<script>

export default {
    nome: "NavBar"
}
</script>

<style scoped>

</style>