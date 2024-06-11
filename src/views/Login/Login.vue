<template>
  <div class="login">
    <div class="overlay">
      <h1 v-if="!showRegisterForm">欢迎登录</h1>
      <h1 v-else>注册新用户</h1>
      
      <div v-if="!showRegisterForm">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" v-model="username" id="username">
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" v-model="password" id="password">
        </div>
        <div class="buttons">
          <button @click="login">登录</button>
          <button @click="showRegister">注册</button>
        </div>
      </div>

      <div v-else>
        <div class="form-group">
          <label for="newUsername">用户名:</label>
          <input type="text" v-model="newUsername" id="newUsername">
        </div>
        <div class="form-group">
          <label for="newPassword">密码:</label>
          <input type="password" v-model="newPassword" id="newPassword">
        </div>
        <div class="buttons">
          <button @click="register">提交注册</button>
          <button @click="cancelRegister">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      newUsername: '',
      newPassword: '',
      showRegisterForm: false
    };
  },
  methods: {
    login() {
      console.log("Login successful (debug mode)");
      // 模拟登录请求，调试时注释掉实际请求
      /*
      this.$axios.post('http://localhost:8080/api/login', {
        username: this.username,
        password: this.password
      }).then(response => {
        console.log(response.data);
        // 处理登录成功后的逻辑
      }).catch(error => {
        console.error(error);
      });
      */
    },
    showRegister() {
      this.showRegisterForm = true;
    },
    cancelRegister() {
      this.showRegisterForm = false;
    },
    register() {
      console.log("Register successful (debug mode)");
      // 模拟注册请求，调试时注释掉实际请求
      /*
      this.$axios.post('http://localhost:8080/api/register', {
        username: this.newUsername,
        password: this.newPassword
      }).then(response => {
        console.log(response.data);
        // 处理注册成功后的逻辑
        this.showRegisterForm = false;
        this.username = this.newUsername;
        this.password = this.newPassword;
      }).catch(error => {
        console.error(error);
      });
      */
      // 调试模式
      this.showRegisterForm = false;
      this.username = this.newUsername;
      this.password = this.newPassword;
    }
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  /*background: url('@/assets/img/index-intellectual_brain.jpg') no-repeat center center fixed;*/
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.form-group {
  margin: 10px 0;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(90deg, #007BFF, #6C757D);
  color: white;
  font-size: 16px;
}

button:hover {
  background: linear-gradient(90deg, #0056b3, #5a6268);
}
</style>
