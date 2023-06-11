<template>
  <section class="main__video">
    <router-link :to="`/${props.type}/`" class="main__video-tittle">
      <span>
        {{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}
      </span>
      <img src="@/assets/images/arrow.png" alt="">
    </router-link>        
    <Swiper 
      :modules='modules' 
      :space-between='25' 
      :navigation='true' 
      :breakpoints='swiperOptions.breakpoints'
      > 
      
      <SwiperSlide class="main__video-item" v-for="(item, i) in content" :key="item.id">
        <img class="main__video-item-img" :src="imgUrlFull + item.backdrop_path || imgUrlFull + item.poster_path" alt="">
        <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
      </SwiperSlide>
    
    
    </Swiper>
  </section>
</template>

<script setup>
import { imgUrlFull } from "@/static";
import { usePopular } from "@/stores/popular";
import { ref, onMounted, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
const props = defineProps(['type'])
const Popular = usePopular()
let modules = ref([Navigation])


let swiperOptions = ref({
  breakpoints:{
    320:{
      slidesPerView:1,
    },
    576:{
      slidesPerView:2,
    },
    900:{
      slidesPerView:3,
    },
    1200:{
      slidesPerView:4,
    },
    1500:{
      slidesPerView:5,
    },
  }
})

const content = computed(()=> props.type == 'movie' ? Popular.popularMovies : Popular.popularTVs)

onMounted(() => {
  Popular.getPopular({ type:props.type })  
})
</script>

<style lang="scss" scoped>

</style>