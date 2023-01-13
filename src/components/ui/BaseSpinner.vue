<template>
  <base-badge class="loading-container" base-badge>
    <img src="../../../image.gif" alt="Loading image" />
  </base-badge>
</template>
<script>
export default {};
</script>
<style lang="css">
.loading-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
img {
    width: 17rem;
    height: 17rem;
    align-self: center;
}
</style>
