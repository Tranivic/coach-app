<template>
  <span class="specialty">
    <slot></slot>
  </span>
</template>

<script>
export default {
};
</script>

<style lang="css" scoped>
span {
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
