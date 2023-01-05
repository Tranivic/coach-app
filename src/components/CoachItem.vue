<template lang="">
<li>
    <h1 class="coach-capitalizedString">{{ coach.name }}</h1>
    <h4 class="coach-salary">${{ coach.salary }}/hour</h4>
    <div class="coach-badges">
        <base-speciality v-for="speciality in coach.specialties" :class="speciality">{{ speciality[0].toUpperCase() + speciality.substring(1) }}</base-speciality>
    </div>
    <div class="coach-btns">
        <base-button :link="true" :to="this.toCoachMessage">Contact</base-button>
        <base-button :link="true" :to="this.toCoachInfo">Details</base-button>
    </div>
</li>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue";
import BaseSpeciality from "./ui/BaseSpecialty.vue";
export default {
    props: ["coach"],
    computed: {
        toCoachInfo() {
            return {
                name: 'coachInfo',
                params: {
                    coachId: this.coach.name,
                },
            }
        },
        toCoachMessage() {
            return {
                name: 'coachMsg',
                params: {
                    coachId: this.coach.name,
                },
            }
        }
    },
    components: {
        BaseButton,
        BaseSpeciality,
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
