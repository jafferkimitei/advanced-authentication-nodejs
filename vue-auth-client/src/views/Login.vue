<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="form.email" placeholder="Email" />
        <input type="password" v-model="form.password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const form = reactive({ email: '', password: '' });
  const error = ref('');
  
  const login = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', data.token);
      router.push('/dashboard'); 
    } catch (err) {
      error.value = err.response?.data?.message || 'Login failed';
    }
  };
  </script>
  