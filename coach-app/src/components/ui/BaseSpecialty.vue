<template>
  <h2 class="specialty">
    <slot></slot>
  </h2>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
h2 {
  font-size: 20px;
}

.specialty {
  padding: 0.5rem;
  margin: 0.5rem;
  color: rgb(221, 225, 230);
}

/* Js related */
.frontend {
  background-color: #2eb5e0;
}

.backend {
  background-color: #00a8a8;
}

.career {
  background-color: #80230c;
}
</style>
