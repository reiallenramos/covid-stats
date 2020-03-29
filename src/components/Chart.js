import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartdata)
  }
}