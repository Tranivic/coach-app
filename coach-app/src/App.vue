<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  created() {
    this.$store.dispatch("coachesModule/getCoaches");
  },
  components: {
    TheHeader,
  },
};
</script>

<style lang="css">
/* Reset CSS */
* {
  padding: 0;
  margin: 0;
  font-family: "Signika Negative", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  border: none;
  text-decoration: none;
  min-height: 100%;
}
a {
  text-decoration: none;
}
input,
textarea:focus {
  outline: none !important;
}
/*  */
</style>
