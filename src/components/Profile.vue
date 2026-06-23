<script setup>
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <h1>{{user.firstname}}'s Nook</h1>
</template>