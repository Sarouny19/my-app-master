<template>
    <div id="app">
      <header>
        <h1>Farm Management System</h1>
        

        <el-form :model="form" :rules="rules" ref="formRef" label-position="right" label-width="70px">
          <el-row :gutter="12">
            <el-col :span="12">
            </el-col>
          </el-row>
        </el-form>

        <nav>
          <router-link to="/">Dashboard</router-link>
          <router-link to="/weatherstation">Weather Station</router-link>
          <router-link to="/soil">Soil Indicators</router-link>
          <router-link to="/greenhouse">Greenhouse Environment</router-link>
          <router-link to="/crops">Crop Growth</router-link>
          <router-link to="/remotecontrol">Remote Control</router-link>
          <router-link to="/video">Live Monitoring</router-link>
          <router-link to="/brain">Intellectual Brain</router-link>
          <router-link to="/equipment">Agricultural Equipment</router-link>
          <router-link to="/manage">Farmland Management</router-link>
          <router-link to="/alertlog">Alert Log</router-link>
          <router-link to="/weatherforecast">Weather Forecast</router-link>
          <router-link to="/rainfallforecast">Rainfall Forecast</router-link>
        </nav>

      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  header {
    background: #35495e;
    padding: 20px;
    color: white;
  }
  
  nav a {
    margin: 0 15px;
    color: white;
    text-decoration: none;
  }
  
  nav a.router-link-active {
    font-weight: bold;
  }
  
  main {
    padding: 20px;
  }
  
  img {
    height: 40px;
  }
  </style>
  