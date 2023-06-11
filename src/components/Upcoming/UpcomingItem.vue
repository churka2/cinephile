<template>
    <transition name="upcoming-item" mode="out-in">
        <div class="main__upcoming-item" v-if="slideView == idx">
            <img :src="imgUrlFull + movie.backdrop_path" class="main__upcoming-item-img" alt="">
            <div class="main__upcoming-content">
                <div class="main__upcoming-info">
                    <h1 class="main__upcoming-content-title">
                        {{ movie.title }}
                    </h1>
                    <p class="main__upcoming-content-text">
                        {{ movie.overview }}
                    </p>
                    <BtnMore />
                </div>
            </div>
            <div class="main__upcoming-next" @click="$emit('SlideNext')">
                <img :src="imgUrl + next.backdrop_path" alt="" class="main__upcoming-next-img">
                <div class="main__upcoming-next-content">
                    <span class="next">Следующий</span>
                    <span class="main__upcoming-next-title">{{ next.title }}</span>
                </div>
                <div class="main__upcoming-next-line"></div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { imgUrl, imgUrlFull } from '@/static';
import BtnMore from '../UI/BtnMore.vue';
const props = defineProps({
    movie: {
        type: Object,
        required: true
    },
    next: {
        type: Object,
        required: true
    },
    idx: {
        type: Number
    },
    slideView: {
        type: Number
    }
})
</script>

<style lang="scss" scoped></style>