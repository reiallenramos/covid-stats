<template>
  <div class="dropdown">
    <button v-if="selected != null" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ selected }}
    </button>
    <button v-else class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select a Country
    </button>
    <div class="dropdown-menu country-selector-offset" aria-labelledby="dropdownMenuButton">
      <a v-for="country in countries" :key="country.value" class="dropdown-item" v-on:click="changeCountry(country.value)">
        {{ country.value }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountrySelector',
  data() {
    return {
      selected: null,
      countries: [
        { "value":"All countries" },
        { "value":"Afghanistan" },
        { "value":"Albania" },
        { "value":"Algeria" },
        { "value":"Andorra" },
        { "value":"Angola" },
        { "value":"Antigua and Barbuda" },
        { "value":"Argentina" },
        { "value":"Armenia" },
        { "value":"Australia" },
        { "value":"Austria" },
        { "value":"Azerbaijan" },
        { "value":"Bahamas" },
        { "value":"Bahrain" },
        { "value":"Bangladesh" },
        { "value":"Barbados" },
        { "value":"Belarus" },
        { "value":"Belgium" },
        { "value":"Belize" },
        { "value":"Benin" },
        { "value":"Bhutan" },
        { "value":"Bolivia" },
        { "value":"Bosnia and Herzegovina" },
        { "value":"Brazil" },
        { "value":"Brunei" },
        { "value":"Bulgaria" },
        { "value":"Burkina Faso" },
        { "value":"Burma" },
        { "value":"Cabo Verde" },
        { "value":"Cambodia" },
        { "value":"Cameroon" },
        { "value":"Canada" },
        { "value":"Central African Republic" },
        { "value":"Chad" },
        { "value":"Chile" },
        { "value":"China" },
        { "value":"Colombia" },
        { "value":"Costa Rica" },
        { "value":"Croatia" },
        { "value":"Cuba" },
        { "value":"Cyprus" },
        { "value":"Czechia" },
        { "value":"Denmark" },
        { "value":"Diamond Princess" },
        { "value":"Djibouti" },
        { "value":"Dominica" },
        { "value":"Dominican Republic" },
        { "value":"Ecuador" },
        { "value":"Egypt" },
        { "value":"El Salvador" },
        { "value":"Equatorial Guinea" },
        { "value":"Eritrea" },
        { "value":"Estonia" },
        { "value":"Eswatini" },
        { "value":"Ethiopia" },
        { "value":"Fiji" },
        { "value":"Finland" },
        { "value":"France" },
        { "value":"Gabon" },
        { "value":"Gambia" },
        { "value":"Georgia" },
        { "value":"Germany" },
        { "value":"Ghana" },
        { "value":"Greece" },
        { "value":"Grenada" },
        { "value":"Guatemala" },
        { "value":"Guinea" },
        { "value":"Guyana" },
        { "value":"Haiti" },
        { "value":"Holy See" },
        { "value":"Honduras" },
        { "value":"Hungary" },
        { "value":"Iceland" },
        { "value":"India" },
        { "value":"Indonesia" },
        { "value":"Iran" },
        { "value":"Iraq" },
        { "value":"Ireland" },
        { "value":"Israel" },
        { "value":"Italy" },
        { "value":"Jamaica" },
        { "value":"Japan" },
        { "value":"Jordan" },
        { "value":"Kazakhstan" },
        { "value":"Kenya" },
        { "value":"Kosovo" },
        { "value":"Kuwait" },
        { "value":"Kyrgyzstan" },
        { "value":"Laos" },
        { "value":"Latvia" },
        { "value":"Lebanon" },
        { "value":"Liberia" },
        { "value":"Libya" },
        { "value":"Liechtenstein" },
        { "value":"Lithuania" },
        { "value":"Luxembourg" },
        { "value":"MS Zaandam" },
        { "value":"Madagascar" },
        { "value":"Malaysia" },
        { "value":"Maldives" },
        { "value":"Mali" },
        { "value":"Malta" },
        { "value":"Mauritania" },
        { "value":"Mauritius" },
        { "value":"Mexico" },
        { "value":"Moldova" },
        { "value":"Monaco" },
        { "value":"Mongolia" },
        { "value":"Montenegro" },
        { "value":"Morocco" },
        { "value":"Mozambique" },
        { "value":"Namibia" },
        { "value":"Nepal" },
        { "value":"Netherlands" },
        { "value":"New Zealand" },
        { "value":"Nicaragua" },
        { "value":"Niger" },
        { "value":"Nigeria" },
        { "value":"North Macedonia" },
        { "value":"Norway" },
        { "value":"Oman" },
        { "value":"Pakistan" },
        { "value":"Panama" },
        { "value":"Papua New Guinea" },
        { "value":"Paraguay" },
        { "value":"Peru" },
        { "value":"Philippines" },
        { "value":"Poland" },
        { "value":"Portugal" },
        { "value":"Qatar" },
        { "value":"Romania" },
        { "value":"Russia" },
        { "value":"Rwanda" },
        { "value":"Saint Kitts and Nevis" },
        { "value":"Saint Lucia" },
        { "value":"Saint Vincent and the Grenadines" },
        { "value":"San Marino" },
        { "value":"Saudi Arabia" },
        { "value":"Senegal" },
        { "value":"Serbia" },
        { "value":"Seychelles" },
        { "value":"Singapore" },
        { "value":"Slovakia" },
        { "value":"Slovenia" },
        { "value":"Somalia" },
        { "value":"South Africa" },
        { "value":"Spain" },
        { "value":"Sri Lanka" },
        { "value":"Sudan" },
        { "value":"Suriname" },
        { "value":"Sweden" },
        { "value":"Switzerland" },
        { "value":"Syria" },
        { "value":"Tanzania" },
        { "value":"Thailand" },
        { "value":"Togo" },
        { "value":"Trinidad and Tobago" },
        { "value":"Tunisia" },
        { "value":"Turkey" },
        { "value":"Uganda" },
        { "value":"Ukraine" },
        { "value":"United Arab Emirates" },
        { "value":"United Kingdom" },
        { "value":"Uruguay" },
        { "value":"US" },
        { "value":"Uzbekistan" },
        { "value":"Venezuela" },
        { "value":"Vietnam" },
        { "value":"West Bank and Gaza" },
        { "value":"Zambia" },
        { "value":"Zimbabwe" }
      ]
    }
  },
  methods: {
    changeCountry: function(country) {
      this.selected = country;
      this.$emit('handle-change-country', country);
    }
  }
}
</script>

<style scoped>
.country-selector-offset {
  top: 48px!important;
}

.dropdown-menu {
  max-height: 200px;
  overflow-y: scroll;
}
</style>