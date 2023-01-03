<template>
<section>
    <coach-filter></coach-filter>
    <coach-list></coach-list>
</section>
</template>

<script>
import CoachList from '@/components/CoachList.vue'
import CoachFilter from '../../components/CoachFilter.vue'

export default {
    components: {
        CoachFilter,
        CoachList,
    },
}
</script>

<style lang="css" scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    align-items: center;
}
</style>
