<template>
  <div id="app">
    <div class="bar">
      <router-link to="/">
        <div>Home</div>
      </router-link>

      <router-link to="/anime">
        <div>Anime</div>
      </router-link>

      <router-link to="/games">
        <div>Games</div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
    

<style>
* {
  background-color: #000022;
} 

.bar {
  display: flex;
  justify-content: space-around;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #000022;
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
</style>
