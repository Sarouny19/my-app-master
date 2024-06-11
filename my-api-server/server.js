const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;//设置端口号

app.use(bodyParser.json());

// 模拟的农田数据
const farmlands = [
  { farmland_id: 1, farmname: '农田1', area: '100亩', location: 'XX省XX市XX县' },
  { farmland_id: 2, farmname: '农田2', area: '80亩', location: 'XX省XX市XX县' },
  { farmland_id: 3, farmname: '农田3', area: '1200000亩', location: 'XX省XX市XX县' }
];

// 获取农田信息端点
app.get('/api/farmlands', (req, res) => {
  res.json({
    success: true,
    message: '返回所有农田的信息列表',
    farmlands: farmlands
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
