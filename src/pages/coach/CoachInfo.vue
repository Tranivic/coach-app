<template>
<div class="info-container">
    <base-badge v-if="this.coach">
        <h1>{{this.fullName}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam sequi amet, laudantium sapiente doloremque velit nesciunt nihil. A enim animi, doloremque similique harum provident rem facilis consectetur unde eveniet.</p>
        <h4>Price: {{this.coach.hourlyRate}}/hour</h4>
        <div class="btn-container">
            <base-button :disable="this.isDisable" :link="true" :to="{name: 'coachMsg'}">Send a message!</base-button>
        </div>
    </base-badge>
    <base-spinner v-else ></base-spinner>
    <router-view v-if="this.coach"></router-view>
</div>
</template>

<script>

export default {
    props: ['coachId'],
    data() {
        return {
            allCoaches: null,
        }
    },
    created() {
        //Function to wait App for fetch data from server, and after fetched will dispatch the function to get expecific coach data
        const interval = setInterval(() => {
            this.allCoaches = this.$store.getters['coachesModule/coaches']
            if (this.allCoaches.length) {
                this.$store.dispatch('coachesModule/identifyCoach', this.coachId)
                clearInterval(interval);
            }
        }, 100)
    },
    computed: {
        fullName() {
            return this.coach.firstName + " " + this.coach.lastName;
        },
        coach() {
            return this.$store.getters['coachesModule/identifiedCoach']
        },
        isDisable(){
            console.log(this.$route.name)
            if(this.$route.name === 'coachMsg'){
                return true
            } else {
                return false
            }
        }
    },
}
</script>

<style lang="css" scoped>
.info-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

p {
    padding: 1rem 0;
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
