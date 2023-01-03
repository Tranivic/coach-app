<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    button{
        padding: 1rem;
        border-radius: 15px;
        cursor: pointer;
        background-color: #EFE7D3;
        transition:all .2s ease-in-out;
        border: none;
    }
    button:hover{
        background: rgb(224, 224, 224);
        transform: scale(1.1);
    }
</style>