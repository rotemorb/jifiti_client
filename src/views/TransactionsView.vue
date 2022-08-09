<template>
  <div id="transactionsData">
    <h1>Transactions</h1>
    <nav>
      <router-link to="/" class="back-to">&#8592; Back to Persons</router-link>
    </nav>
    <div class="personDetails">
      <p><strong>ID:</strong>{{ this.$route.params.appId }}</p>
      <p><strong>First Name:</strong>{{ this.$route.params.firstName }}</p>
      <p><strong>Last Name:</strong> {{ this.$route.params.lastName }}</p>
    </div>
    <div class="tableSettings">
      <table>
        <thead>
          <tr>
            <th>cardNo.</th>
            <th>issuer</th>
            <th>amount</th>
            <th>transType</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td>{{ transaction.cardId }}</td>
          <td>{{ transaction.id }}</td>
          <td>{{ transaction.amount }}</td>
          <td>{{ transaction.transType }}</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import * as transactionsService from '../services/transactionsService.js';
export default {
  name: 'TransactionsView',
  data()
  {
    return {
      transactions: [],
    };
  },
  mounted()
  {

    transactionsService.getTransactions(this.$route.params.appId).then((res) =>
    {
      this.transactions = res.data;
      console.log(this.transactions);
    });

  },
}
</script>

<style>
#transactionsData {
  display: grid;
  justify-items: center;
}
.personDetails {
  width: 12rem;
}
.back-to {
  color: #42b983;
  text-decoration: none;
}
</style>