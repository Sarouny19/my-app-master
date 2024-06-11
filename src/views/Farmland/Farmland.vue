<template>
  <div>
    <h1>Farmlands</h1>
    <button @click="fetchFarmlands">Fetch Farmlands</button>
    <ul>
      <li v-for="farmland in farmlands" :key="farmland.farmland_id">
        {{ farmland.farmname }} - {{ farmland.area }} - {{ farmland.location }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      farmlands: []
    };
  },
  methods: {
    async fetchFarmlands() {
      try {
        const response = await axios.get('/api/farmlands');
        if (response.data.success) {
          this.farmlands = response.data.farmlands;
        }
      } catch (error) {
        console.error("There was an error fetching the farmlands!", error);
      }
    }
  },
  created() {
    this.fetchFarmlands(); // 初次加载时获取农田数据
  }
};
</script>

<style scoped>
/* 添加样式 */
button {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
