<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Country</th>
          <th scope="col">City</th>
          <th scope="col">Province</th>
          <th scope="col">Confirmed Cases</th>
          <th scope="col">Deaths</th>
          <th scope="col">Recovered</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.keyId"> 
          <th scope="row">{{user.country}}</th>
          <th v-if="user.city" scope="row">
            {{user.country}}
          </th>
          <th v-else scope="row">
            -
          </th>
          <th v-if="user.province" scope="row">
            {{user.province}}
          </th>
          <th v-else scope="row">
            -
          </th>
          <td>{{user.confirmed}}</td>
          <td>{{user.deaths}}</td>
          <td>{{user.recovered}}</td>
        </tr>
      </tbody>
    </table> 
  </div> 
</template>

<script>
  import axios from 'axios';

  axios.defaults.baseURL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com';
  axios.defaults.headers.common['x-rapidapi-host'] = 'covid-19-coronavirus-statistics.p.rapidapi.com';
  axios.defaults.headers.common['x-rapidapi-key'] = '7a61f2cdb6msh03c48ce23f3098fp14aecfjsn7000ab6cc334';

  export default {
    name: 'DataFetcher',
    data() {
      return {
        users: null,
      }
    },
    created: function() {
      axios
        .get('/v1/stats?country=Canada')
        .then(res => {
          this.users = res.data.data.covid19Stats;
        })
    }
  }
</script>

<style scoped>
  h3 {
    margin-bottom: 5%;
  }
</style>