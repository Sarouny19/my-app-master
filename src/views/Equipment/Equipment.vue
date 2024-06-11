<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="addDevice">
      <div>
        <label for="deviceName">Device Name:</label>
        <input type="text" id="deviceName" v-model="newDevice.device_name" required>
      </div>
      <div>
        <label for="farmlandId">Farmland ID:</label>
        <input type="number" id="farmlandId" v-model="newDevice.farmland_id" required>
      </div>
      <button type="submit">Add Device</button>
    </form>
    <EquipmentComponent :equipmentData="equipmentData" />
  </div>
</template>

<script>
import axios from 'axios';
import EquipmentComponent from './EquipmentComponent.vue';

export default {
  name: 'Equipment',
  components: {
    EquipmentComponent
  },
  data() {
    return {
      title: 'Equipment Information',
      equipmentData: [],
      newDevice: {
        device_name: '',
        farmland_id: null
      }
    };
  },
  created() {
    this.fetchEquipmentData();
  },
  methods: {
    fetchEquipmentData() {
      axios.get('/api/equipment')
        .then(response => {
          if (response.data.success) {
            this.equipmentData = response.data.equipment;
          } else {
            console.error('Error fetching equipment data:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching equipment data:', error);
        });
    },
    addDevice() {
      axios.post('/api/monitoring_devices', this.newDevice)
        .then(response => {
          if (response.data.success) {
            this.equipmentData.push(response.data.new_device);
            this.newDevice.device_name = '';
            this.newDevice.farmland_id = null;
          } else {
            console.error('Error adding device:', response.data.message);
          }
        })
        .catch(error => {
          console.error('Error adding device:', error);
        });
    }
  }
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 5px 0;
}

input {
  margin: 5px 0;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
7