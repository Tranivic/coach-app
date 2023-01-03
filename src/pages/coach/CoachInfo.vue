<template lang="">
<div class="info-container">
    <base-badge v-if="this.coach">
        <h1>{{this.coach.name}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam sequi amet, laudantium sapiente doloremque velit nesciunt nihil. A enim animi, doloremque similique harum provident rem facilis consectetur unde eveniet.</p>
        <h4>Price: {{this.coach.salary}}/hour</h4>
        <div class="btn-container">
            <base-button @click="pushMsg">Send a message!</base-button>
        </div>
    </base-badge>
    <base-badge v-else class="loading-container" base-badge>
        <img src="../../../image.gif" alt="Loading image">
    </base-badge>
    <router-view v-if="this.coach"></router-view>
</div>
</template>

<script>
import BaseBadge from '../../components/ui/BaseBadge.vue'
import BaseButton from '../../components/ui/BaseButton.vue'

export default {
    props: ['coachId'],
    methods: {
        pushMsg() {
            this.$router.push({
                name: 'coachMsg',
            })
        }
    },
    data() {
        return {
            allCoaches: null,
        }
    },
    created() {
        const interval = setInterval(() => {
            this.allCoaches = this.$store.getters['coachesModule/coaches']
            if (this.allCoaches.length) {
                this.$store.dispatch('coachesModule/identifyCoach', this.coachId)
                clearInterval(interval);
            }
        }, 100)
    },
    computed: {
        coach() {
            return this.$store.getters['coachesModule/identifiedCoach']
        },
    },
    components: {
        BaseBadge,
        BaseButton
    },
}
</script>

<style lang="css" scoped>
.info-container,
.loading-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

p {
    padding: 1rem 0;
}

img {
    width: 17rem;
    height: 17rem;
    align-self: center;
}

a {
    text-decoration: none;
    color: black;
}

.btn-container {
    display: flex;
    justify-content: center;
}
</style>
