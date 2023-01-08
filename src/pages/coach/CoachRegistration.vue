<template>
  <section>
    <h2>Register as a coach now!</h2>
    <coach-form></coach-form>
  </section>
</template>

<script>
import CoachForm from "../../components/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },
};
</script>

<style lang="css">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
</style>
<!-- Todo -------------- -->
