<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Persons msg="Jifity Transactions" />
    <jifity-transactions></jifity-transactions>
  </div>
</template>

<script>
import JifityTransactions from './components/JifityTransactions.vue';
import Persons from './components/Persons.vue';

export default {
  name: 'App',
  components: {
    Persons,
    JifityTransactions
  }
}
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
