<template>
<li>
    <h1 class="coach-capitalizedString">{{ fullName }}</h1>
    <h4 class="coach-salary">${{ coach.hourlyRate }}/hour</h4>
    <div class="coach-badges">
        <base-speciality v-for="speciality in coach.specialties" :key="speciality" :class="speciality">{{ speciality[0].toUpperCase() + speciality.substring(1) }}</base-speciality>
    </div>
    <div class="coach-btns">
        <base-button :link="true" :to="this.toCoachMessage">Contact</base-button>
        <base-button :link="true" :to="this.toCoachInfo">Details</base-button>
    </div>
</li>
</template>

<script>
export default {
    props: ["coach"],
    computed: {
        fullName() {
            return this.coach.firstName + " " + this.coach.lastName;
        },
        toCoachInfo() {
            return {
                name: 'coachInfo',
                params: {
                    coachId: this.coach.id,
                },
            }
        },
        toCoachMessage() {
            return {
                name: 'coachMsg',
                params: {
                    coachId: this.coach.id,
                },
            }
        }
    },
};
</script>

<style lang="css" scoped>
h1 {
    margin-bottom: 0.5rem;
}

li {
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    background: #efecf0;
    border-radius: 15px;
    box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.35);
    margin: 1rem 0;
}

.coach-badges {
    display: flex;
    margin-top: 0.5rem;
}

.coach-btns {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
}
a{
    margin: 0 1rem;
}
</style>
