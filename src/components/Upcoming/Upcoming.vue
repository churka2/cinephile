<template>
    <transition name="upcoming" mode="out-in">
        <div class="main__upcoming" v-if="getUpcomingArr">
            <UpcomingItem 
            v-for="(movie, idx) in getUpcomingArr" 
            :key="movie.id" 
            :movie="movie"
            :next="getUpcomingArr[idx + 1 == getUpcomingArr.length ? 0 : idx + 1]" :idx="idx" 
            :slideView="slideView"
            @SlideNext="SlideNext" 
            />
        </div>
        <Loader v-else />
    </transition>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useUpcoming } from '@/stores/upcoming';
import UpcomingItem from './UpcomingItem.vue';
let upcomingStore = useUpcoming()

const getUpcomingArr = computed(() => upcomingStore.upcoming)

let slideView = ref(0)
let timeout = ref(null)

const slide = () => {
    if (getUpcomingArr.value.length - 1 == slideView) slideView.value = 0
    else slideView.value++
    timeout = setTimeout(slide, 5000)
}

const SlideNext = () => {
    clearTimeout(timeout)
    slide()
}

onMounted(() => {
    upcomingStore.getUpcoming()
    timeout = setTimeout(slide, 5000)
})

</script>

<style lang="scss" scoped></style>