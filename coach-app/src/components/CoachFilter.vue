<template>
<base-badge>
    <div class="coach-filter">
        <h1>Find Your Coach</h1>
        <div class="check-btns">
            <input type="checkbox" id="frontend" value="frontend" v-model="checkedGroup" />
            <label for="one">Fronted</label>
            <input type="checkbox" id="backend" value="backend" v-model="checkedGroup" />
            <label for="one">Backend</label>
            <input type="checkbox" id="career" value="career" v-model="checkedGroup" />
            <label for="one">Career</label>
        </div>
    </div>
</base-badge>
</template>

<script>
import BaseBadge from "./ui/BaseBadge.vue";
export default {
    methods: {
  
    },
    components: {
        BaseBadge,
    },
    data() {
        return {
            checkedGroup: [],
        }
    },
    watch: {
        checkedGroup(newValue, _) {
            this.$store.dispatch('coachesModule/getFilterValues', newValue)
        }
    },
};
</script>

<style lang="css" scoped>
.coach-filter {
    color: black;
}

.check-btns {
    padding: .5rem 0;
}

label {
    padding: 0 .5rem;
}
</style>
