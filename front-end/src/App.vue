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

    <div class='footer'>https://github.com/BenjaminRicks/Creative-4.git</div>
  </div>

</template>
    

<style>
* {

} 

body {
  background-color: #000022;
}

.bar {
  display: flex;
  height: 40px;
  width: 90%;
  justify-content: space-around;
  background-color: #005E7C;
  border: 1px solid white;
  border-radius: 15px;
  align-items: center;

}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.footer {
  display: flex;
  justify-content: center;
  color: white;
}

</style>
