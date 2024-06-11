<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://localhost:3000/api/register', {
          username: this.username,
          password: this.password
        });
        console.log(response.data);
        // Redirect to login page or show success message
        alert("Registration successful!");
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
        // Handle error (show error message to user)
        alert("Registration failed. Please try again.");
      }
    }
  }
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  background: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.register h2 {
  margin-bottom: 1em;
}

.register div {
  margin-bottom: 1em;
}

.register label {
  display: block;
  margin-bottom: 0.5em;
}

.register input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

.register button {
  padding: 0.7em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.register button:hover {
  background-color: #0056b3;
}
</style>
