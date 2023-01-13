<template>
<base-badge>
    <div class="list-btns">
        <base-button @click="refreshCoaches">Refresh</base-button>
        <base-button :link="true" :to="{ name: 'register' }">Register as a Coach</base-button>
    </div>
    <ul v-if="showCoaches" class="coaches-list">
        <coach-item v-for="coach in showCoaches" :key="coach.id" :coach="coach"></coach-item>
    </ul>
</base-badge>
</template>

<script>
import CoachItem from "./CoachItem.vue";

export default {
    methods: {
        refreshCoaches() {
            this.$store.dispatch("coachesModule/refreshPage");
        },
    },
    computed: {
        showCoaches() {
            return this.$store.getters["coachesModule/coaches"];
        },
    },
    components: {
        CoachItem,
    },
};
</script>

<style lang="css" scoped>
.list-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.coaches-list {
    list-style-type: none;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a {
    text-decoration: none;
    color: black;
}
</style>
