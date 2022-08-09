<template>
  <div>
    <h5>Please click on a person to see his transactions</h5>
    <div class="tableSettings">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="person in persons"
            :key="person.id"
            @click="
              goToTransactions(person.id, person.firstName, person.lastName)
            "
          >
            <td>{{ person.id }}</td>
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import * as transactionsService from '../services/transactionsService.js';
export default {
  name: 'PersonsView',
  data()
  {
    return {
      persons: [],
    };
  },
  methods:
  {
    goToTransactions(appId, firstName, lastName)
    {
      this.$router.push({ name: 'Transactions', params: { appId, firstName, lastName } });
    }
  },
  mounted()
  {

    transactionsService.getPersons().then((res) =>
    {
      this.persons = res.data;
    });

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
