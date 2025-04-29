<template>
    <div>
        <h2>Auth Dashboard</h2>
        <p>Welcome to the dashboard!</p>
        <p>This is a protected route. You can only see this if you are logged in.</p>
        <p>Here you can manage your account, view your profile, and more.</p>
        <p>Click the button below to log out.</p>
        <p>Make sure to log out when you are done.</p>
        <p>Thank you for using our application!</p>
        <p>Have a great day!</p>

    </div>


</template>

<style scoped>
h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
}
p {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

}
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;

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