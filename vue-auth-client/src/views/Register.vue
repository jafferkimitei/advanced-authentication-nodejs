<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="form.username" placeholder="Username" />
        <input v-model="form.email" placeholder="Email" />
        <input type="password" v-model="form.password" placeholder="Password" />
        <button type="submit" :disabled="isLoading">
      {{ isLoading ? 'Registering...' : 'Register' }}
    </button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const isLoading = ref(false);
  
  const form = reactive({ username: '', email: '', password: '' });
  const error = ref('');
  
  const register = async () => {
    isLoading.value = true;
    try {
      const res =await axios.post('http://localhost:5000/api/auth/signup', form);
      alert('Registered successfully!');
      router.push('/login');
    } catch (err) {
      error.value = err.response?.data?.message || 'Registration failed';
    } finally {
      isLoading.value = false;
    }
  };
  </script>

<style scoped>

h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    margin-top: 20px;
}
p {
    font-size: 16px;
    margin-bottom: 20px;
}
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
button:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
button:active {
    background-color: #004085;
}
button:disabled {
    background-color: #007bff;
    opacity: 0.5;
    cursor: not-allowed;
}
form{
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
    
}
input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    text-transform: lowercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 5px;
}
input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    border-color: #007bff;
}
input::placeholder {
    color: #999;
    font-style: italic;
}
input:disabled {
    background-color: #f0f0f0;
    color: #999;
    cursor: not-allowed;
}
input:disabled:hover {
    background-color: #f0f0f0;
    box-shadow: none;
}

  </style>

  