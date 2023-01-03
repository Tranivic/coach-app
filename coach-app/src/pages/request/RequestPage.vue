<template lang="">
<section>
    <h1>All Requests</h1>
    <ul>
        <request-item v-for="request in allRequests" :key="request.id" :request="request"></request-item>
    </ul>
</section>
</template>

<script>
import RequestItem from "../../components/RequestItem.vue";
export default {
    created() {
        this.$store.dispatch("requests/fetchRequests");
    },
    computed: {
        allRequests() {
            return this.$store.getters['requests/getRequests']
        }
    },
    components: {
        RequestItem,
    },
};
</script>

<style lang="css" scoped>
section {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}
h1{
 padding-top: 2rem;
}
ul {
    margin: 0;
    padding-bottom: 2rem;
}
</style>
