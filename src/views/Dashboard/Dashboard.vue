<template>
    <div>
      <h1>Farm Management Dashboard</h1>
      <WeatherForecast />
      <RainfallForecast />
      <AlertLog />
    </div>
  </template>
  
  <script>
  import WeatherForecast from './WeatherForecast.vue';
  import RainfallForecast from './RainfallForecast.vue';
  import AlertLog from './AlertLog.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      WeatherForecast,
      RainfallForecast,
      AlertLog
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: #34495e;
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  