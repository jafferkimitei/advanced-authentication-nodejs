<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="form.username" placeholder="Username" />
        <input v-model="form.email" placeholder="Email" />
        <input type="password" v-model="form.password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import axios from 'axios';
  
  const form = reactive({ username: '', email: '', password: '' });
  const error = ref('');
  
  const register = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registered successfully!');
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed';
    }
  };
  </script>
  