<template>
  <div id="app">
    <nav>
      <template v-if="isAuthenticated">
        <button @click="logout">Logout</button>
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link> 
        <router-link to="/register">Register</router-link>
      </template>
    </nav>
    <router-view />
  </div>
</template>


<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const isAuthenticated = ref(false)
const router = useRouter()
const route = useRoute()


watchEffect(() => {
  isAuthenticated.value = !!localStorage.getItem('token')
})

const logout = () => {
  localStorage.removeItem('token')
  isAuthenticated.value = false
  router.push('/login')
}
</script>


<style>
nav {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  border-radius: 5px;
  display: flex;
  justify-content:right;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
}

nav button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

nav button:hover {
  background-color: #0056b3;
}
nav button:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
nav button:active {
  background-color: #004085;
}
nav button:disabled {
  background-color: #007bff;
  opacity: 0.5;
  cursor: not-allowed;
}
nav button:disabled:hover {
  background-color: #007bff;
  box-shadow: none;
}

</style>
