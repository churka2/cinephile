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
    border-radius: 10px;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    width: max-content;

    &__text {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        color: white;
    }
}
</style>
