<template>
  <div class="home">
    <NavBar/>
    <Login/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Login from '@/components/Login.vue'
  import NavBar from '@/components/layout/NavBar.vue'

  export default {
  name: 'Home',
  components: {
    Login,
    NavBar
  }
}
</script>
