<template lang="">
<header>
    <div class="logo">
        <h1>Find a coach</h1>
    </div>
    <div class="navbar">
        <router-link :to="{ name: 'coach', params: {}}">Find a coach</router-link>
        <router-link :to="{ name: 'request', params: {}}">All Requests</router-link>
    </div>
</header>
</template>

<script>
export default {

};  
</script>

<style lang="css" scoped>
header {
    display: flex;
    justify-content: space-between;
    background-color: #C26DBC;
    text-align: center;
    align-items: center;
    padding: 2rem 0;
}

h1 {
    color: white;
    padding-left: 1rem;
}

a {
    color: white;
    font-size: 1.5rem;
    padding: 0 1rem;
}
</style>
