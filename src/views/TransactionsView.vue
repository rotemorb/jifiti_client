<template>
  <div id="transactionsData">
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
        <tbody>
          <tr v-for="transaction in transactionsPerCard" :key="transaction.id">
            <td>{{ transaction.cardNo }}</td>
            <td>{{ transaction.issuer }}</td>
            <td>{{ transaction.amount }}$</td>
            <td>
              {{
                Array.from(transactionTypes).find((type) => {
                  return type.id == transaction.transType;
                }).type
              }}
            </td>
          </tr>
        </tbody>
      </table>
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
      cards: [],
      transactions: [],
      transactionTypes: [
        { id: 1, type: "AUTH" },
        { id: 2, type: "COMMIT" },
        { id: 3, type: "REFUND" }
      ],
      transactionsPerCard: []
    };
  },
  methods:
  {
    getCardData(id)
    {
      return Array.from(this.cardData).at(x => x.id == id);
    }
  },
  mounted()
  {
    transactionsService.getCards(this.$route.params.appId).then((res) =>
    {
      this.cards = res.data;

      //For each cardData, get appropriate Transactions
      this.cards.forEach(card =>
      {
        transactionsService.getTransactions(card.id).then(res =>
        {
          this.transactions = res.data;
          this.transactions.forEach(trans =>
          {
            this.transactionsPerCard.push({ cardNo: card.cardNo, amount: trans.amount, issuer: card.issuer, transType: trans.transType });
          });
        });

      });
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
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.back-to {
  color: #42b983;
  text-decoration: none;
}
</style>