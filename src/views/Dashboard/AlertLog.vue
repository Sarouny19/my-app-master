<template>
    <div>
      <h2>Alert Logs</h2>
      <div v-if="alertLogs.length">
        <div v-for="log in alertLogs" :key="log.log_id">
          <p><strong>Log Date:</strong> {{ log.log_date }}</p>
          <p><strong>Alert Message:</strong> {{ log.alert_message }}</p>
          <p><strong>Farmland ID:</strong> {{ log.farmland_id }}</p>
          <p><strong>Device ID:</strong> {{ log.device_id }}</p>
          <hr />
        </div>
      </div>
      <div v-else>
        <p>No alert log data available.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AlertLog',
    data() {
      return {
        alertLogs: []
      };
    },
    created() {
      this.fetchAlertLogs();
    },
    methods: {
      fetchAlertLogs() {
        axios.get('/api/alert_logs')
          .then(response => {
            if (response.data.success) {
              this.alertLogs = response.data.logs;
            } else {
              console.error('Error fetching alert logs:', response.data.message);
            }
          })
          .catch(error => {
            console.error('Error fetching alert logs:', error);
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
  