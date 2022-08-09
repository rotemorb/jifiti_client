<template>
  <div id="app">
    <h1>Jifity Transactions</h1>
    <nav>
      <router-link to="/">Persons</router-link> |
      <router-link to="/Transactions">Transactions</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  height: 100vh;
  justify-content: center;
  grid-template-rows: 0.1fr;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
