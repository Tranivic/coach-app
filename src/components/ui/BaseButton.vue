<template>
<button :class="disable" v-if="!link">
    <slot></slot>
</button>
<router-link :class="{disabled: disable}" v-else :to="to">
    <slot></slot>
</router-link>
</template>

<script>
export default {
    props: {
        disable:{
            type: Boolean,
            required: false,
            default: false
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            required: false,
            default: false,
        },
    },
};
</script>

<style lang="css" scoped>
button,
a {
    padding: 1rem;
    border-radius: 15px;
    cursor: pointer;
    background-color: #efe7d3;
    transition: all 0.2s ease-in-out;
    border: none;
}

a{color: inherit;}

.disabled {
  /* button deactivated */
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
