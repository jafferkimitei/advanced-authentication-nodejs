<template>
    <div>
        <h2>Auth Dashboard</h2>
        <p>Welcome to the dashboard!</p>
        <button @click="logout">Logout</button>
    </div>

</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};


</script>



<style scoped>
h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
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
button:disabled:hover {
    background-color: #007bff;
    box-shadow: none;
}


</style>