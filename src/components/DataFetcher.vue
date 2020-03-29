<template>
  <div class="row">
    <template v-if="isLoading">
      <LoadingSplash />
    </template>
    <template v-else>
      <div class="col-md-8">
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
            <tr v-for="record in records" v-bind:key="record.keyId">
              <th scope="row">{{record.country}}</th>
              <th v-if="record.city" scope="row">
                {{record.country}}
              </th>
              <th v-else scope="row">
                -
              </th>
              <th v-if="record.province" scope="row">
                {{record.province}}
              </th>
              <th v-else scope="row">
                -
              </th>
              <td>{{record.confirmed}}</td>
              <td>{{record.deaths}}</td>
              <td>{{record.recovered}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4">
        <CountrySelector v-on:handle-change-country='changeCountry'/>
        <Chart v-if="!isLoading" :chartdata="chartdata"/>
      </div>
    </template>
  </div>
</template>

<script>
  import axios from 'axios';
  import LoadingSplash from './LoadingSplash.vue'
  import CountrySelector from './CountrySelector.vue'
  import Chart from './Chart.js'

  axios.defaults.baseURL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com';
  axios.defaults.headers.common['x-rapidapi-host'] = 'covid-19-coronavirus-statistics.p.rapidapi.com';
  axios.defaults.headers.common['x-rapidapi-key'] = '7a61f2cdb6msh03c48ce23f3098fp14aecfjsn7000ab6cc334';

  export default {
    name: 'DataFetcher',
    data() {
      return {
        records: null,
        country: '',
        isLoading: true,
        chartdata: {
          labels: ['deaths', 'recovered'],
          datasets: [
            {
              label: '',
              backgroundColor: ['#a23131', '#a1dd70'],
              data: [0, 0]
            }
          ]
        }
      }
    },
    watch: {
      country: function() {
        this.isLoading = true;
        this.fetchData();
      }
    },
    created: function() {
      this.fetchData();
    },
    components: {
      CountrySelector,
      LoadingSplash,
      Chart,
    },
    methods: {
      changeCountry: function(country) {
        this.country = country;
      },
      fetchData: function() {
        axios
          .get(`/v1/stats?country=${this.country}`)
          .then(res => {
            let records = res.data.data.covid19Stats;
            this.records = records;
            let arrayOfConfirmed = records.map(record => record.confirmed );
            let arrayOfDeaths = records.map(record => record.deaths );
            let arrayOfRecovered = records.map(record => record.recovered );
            let totalConfirmed = arrayOfConfirmed.reduce((a, b) => { return a + b });
            let totalDeaths = arrayOfDeaths.reduce((a, b) => { return a + b });
            let totalRecovered = arrayOfRecovered.reduce((a, b) => { return a + b });
            this.chartdata.datasets[0].label = `Total confirmed cases for ${this.country}: ${totalConfirmed}`;
            this.chartdata.datasets[0].data = [totalDeaths, totalRecovered];
            this.isLoading = false;
          })
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin-bottom: 5%;
  }
</style>