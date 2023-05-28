<template>
    <router-link to="/" class="more">
        <img src="@/assets/images/more.svg" alt="">
        <span class="more__text">Подробнее</span>
    </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.more {
    padding: 10px 15px;
    background: #149A03;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: max-content;
    border-radius: 10px;
    color: white;

}
</style>