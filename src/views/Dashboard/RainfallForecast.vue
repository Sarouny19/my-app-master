<template>
    <div>
      <h2>Rainfall Forecast</h2>
      <div v-if="rainfallData.length">
        <div v-for="rainfall in rainfallData" :key="rainfall.rainfall_id">
          <p><strong>Date:</strong> {{ rainfall.date }}</p>
          <p><strong>Rainfall Amount:</strong> {{ rainfall.rainfall_amount }}mm</p>
          <p><strong>Farmland ID:</strong> {{ rainfall.farmland_id }}</p>
          <hr />
        </div>
      </div>
      <div v-else>
        <p>No rainfall forecast data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'RainfallForecast',
    data() {
      return {
        rainfallData: []
      };
    },
    created() {
      this.fetchRainfallData();
    },
    methods: {
      fetchRainfallData() {
        axios.get('/api/rainfall_forecast')
          .then(response => {
            if (response.data.success) {
              this.rainfallData = response.data.rainfalls;
            } else {
              console.error('Error fetching rainfall data:', response.data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching rainfall data:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #2c3e50;
  }
  p {
    margin: 5px 0;
  }
  hr {
    border: 1px solid #ccc;
  }
  </style>
  