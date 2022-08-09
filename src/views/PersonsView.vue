<template>
  <div id="personsTbl">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Profession</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" @click="goToTransactions(row.id)">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.phone }}</td>
          <td>{{ row.profession }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PersonsView',
  data()
  {
    return {
      rows: [
        { id: 1, name: "Chandler Bing", phone: '305-917-1301', profession: 'IT Manager' },
        { id: 2, name: "Ross Geller", phone: '210-684-8953', profession: 'Paleontologist' },
        { id: 3, name: "Rachel Green", phone: '765-338-0312', profession: 'Waitress' },
        { id: 4, name: "Monica Geller", phone: '714-541-3336', profession: 'Head Chef' },
        { id: 5, name: "Joey Tribbiani", phone: '972-297-6037', profession: 'Actor' },
        { id: 6, name: "Phoebe Buffay", phone: '760-318-8376', profession: 'Masseuse' }
      ]
    };
  },
  methods:
  {
    goToTransactions(id)
    {
      console.log("hello", id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#personsTbl {
  overflow-x: auto;
}
table {
  font-family: "Open Sans", sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
  cursor: pointer;
}

table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) {
  background: #d4d8f9;
}

table tbody tr:hover {
  background-color: #44475c;
  color: white;
}
</style>
