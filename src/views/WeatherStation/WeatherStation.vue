<template>
  <div class="weather-station">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-tickets"></i> 气象站</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div v-if="weatherStationFlag" class="content">
      <el-row :gutter="20" v-for="(x, i) in weatherStationState" :key="i" class="row">
        <el-col :span="24">
          <x-weather-station :info="x"></x-weather-station>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<!--
<script>
import XWeatherStation from './WeatherStationComponent.vue'

export default {
  components: {
    XWeatherStation
  },
  data() {
    return {
      // 气象站是否准备就绪
      weatherStationFlag: false,
      // 用户所有的气象站参数(实时数据)
      weatherStationState: [],
      // 定时器的名称
      update: null
    }
  },
  methods: {
    // 获得气象站实时数据
    getWeatherStationState() {
      this.axios({
        url: 'http://60.190.23.22:8889/fertilizer_distributor/api/do.jhtml?router=appApiService.getrealtimedata',
        params: {
          token: localStorage.getItem('user_token')
        }
      }).then(res => {
        // console.log(res);
        this.weatherStationState = [];
        for (let i in res.data.data) {
          if (res.data.data[i].species == 'weather_station') {
            this.weatherStationState.push(res.data.data[i]);
          }
        }
        // console.log(this.weatherStationState);
        this.weatherStationFlag = true;
      }).catch(err => {
        console.log(err)
      })
    },
  },
  activated() {
    this.getWeatherStationState();
    // 每10秒更新一次数据
    this.update = setInterval(() => {
      console.log('更新数据！');
      this.getWeatherStationState();
    }, 10000);
  },
  deactivated() {
    clearInterval(this.update);
  }
}
</script>
-->


<script>
import XWeatherStation from './WeatherStationComponent.vue'

export default {
  components: {
    XWeatherStation
  },
  data() {
    return {
      // 气象站是否准备就绪
      weatherStationFlag: false,
      // 用户所有的气象站参数(模拟的实时数据)
      weatherStationState: [],
      // 定时器的名称
      update: null
    }
  },
  methods: {
    // 生成模拟气象站实时数据
    generateWeatherStationState() {
      this.weatherStationState = [{
        species: 'weather_station',
        temperature: (Math.random() * 5 + 20).toFixed(2), // 生成20到25度之间的随机温度
        humidity: (Math.random() * 20 + 40).toFixed(2), // 生成40%到60%之间的随机湿度
        windSpeed: (Math.random() * 5 + 2).toFixed(2) // 生成2到7 m/s之间的随机风速
      }];
      console.log(this.weatherStationState);
      this.weatherStationFlag = true;
    }
  },
  activated() {
    this.generateWeatherStationState();
    // 每10秒更新一次数据
    this.update = setInterval(() => {
      console.log('更新气象站数据！');
      this.generateWeatherStationState();
    }, 10000);
  },
  deactivated() {
    clearInterval(this.update);
    this.weatherStationFlag = false;
  }
}
</script>







<style scoped>
  .row {
    margin-bottom: 10px;
  }
</style>