<template>
<div class="base-badge">
    <slot></slot>
</div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.base-badge {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 50%;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.35);
    margin: 1rem 0;
}
</style>
