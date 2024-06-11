<template>
    <div>
      <h2>Farmland List</h2>
      <div v-if="farmlandData.length">
        <div v-for="farmland in farmlandData" :key="farmland.farmland_id">
          <p><strong>ID:</strong> {{ farmland.farmland_id }}</p>
          <p><strong>Name:</strong> {{ farmland.farmname }}</p>
          <p><strong>Area:</strong> {{ farmland.area }}</p>
          <p><strong>Location:</strong> {{ farmland.location }}</p>
          <hr />
        </div>
      </div>
      <div v-else>
        <p>No farmland data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FarmlandComponent',
    props: {
      farmlandData: {
        type: Array,
        required: true
      }  
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #3498db;
  }
  p {
    margin: 5px 0;
  }
  hr {
    border: 1px solid #ccc;
  }
  </style>
  