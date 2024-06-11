<template>
    <div>
      <h2>Equipment List</h2>
      <div v-if="equipmentData.length">
        <div v-for="equipment in equipmentData" :key="equipment.device_id">
          <p><strong>ID:</strong> {{ equipment.device_id }}</p>
          <p><strong>Name:</strong> {{ equipment.device_name }}</p>
          <p><strong>Farmland ID:</strong> {{ equipment.farmland_id }}</p>
          <hr />
        </div>
      </div>
      <div v-else>
        <p>No equipment data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EquipmentComponent',
    props: {
      equipmentData: {
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
  