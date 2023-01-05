<template>
<base-badge>
    <div class="list-btns">
        <base-button @click="refreshCoaches">Refresh</base-button>
        <base-button :link="true" :to="{ name: 'register' }">Register as a Coach</base-button>
    </div>
    <ul class="coaches-list">
        <coach-item v-for="coach in showCoaches" :key="coach" :coach="coach"></coach-item>
    </ul>
</base-badge>
</template>

<script>
import CoachItem from "./CoachItem.vue";
import BaseBadge from "./ui/BaseBadge.vue";
import BaseButton from "./ui/BaseButton.vue";

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
        BaseBadge,
        BaseButton,
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
