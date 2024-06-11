<template>
    <div>
      <h2>Weather Forecast</h2>
      <div v-if="forecastData.length">
        <div v-for="forecast in forecastData" :key="forecast.forecast_id">
          <p><strong>Date:</strong> {{ forecast.date }}</p>
          <p><strong>Temperature:</strong> {{ forecast.temperature }}°C</p>
          <p><strong>Humidity:</strong> {{ forecast.humidity }}%</p>
          <p><strong>Farmland ID:</strong> {{ forecast.farmland_id }}</p>
          <hr />
        </div>
      </div>
      <div v-else>
        <p>No weather forecast data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WeatherForecast',
    data() {
      return {
        forecastData: []
      };
    },
    created() {
      this.fetchForecastData();
    },
    methods: {
      fetchForecastData() {
        axios.get('/api/weather_forecast')
          .then(response => {
            if (response.data.success) {
              this.forecastData = response.data.forecasts;
            } else {
              console.error('Error fetching forecast data:', response.data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching forecast data:', error);
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
  