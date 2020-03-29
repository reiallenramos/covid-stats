<template>
  <div>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select country
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#" v-on:click="changeCountry('Singapore')">Singapore</a>
        <a class="dropdown-item" href="#" v-on:click="changeCountry('Philippines')">Philippines</a>
        <a class="dropdown-item" href="#" v-on:click="changeCountry('Canada')">Canada</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button',
  methods: {
    changeCountry: function(country) { this.$emit('handle-change-country', country); }
  }
}
</script>
