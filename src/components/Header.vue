<script setup>
import {Vue3Lottie} from 'vue3-lottie'
import Animation from '../data/animation.json'
import { useWindowSize } from '@vueuse/core'
import { ref,watch } from 'vue';

import Haikei from './svgComponents/Haikei.vue'


const lang=defineProps(['lang'])

const { width } = useWindowSize()

const animationSize = ref('')

if(width.value < 750){
    animationSize.value = 200
} else{
    animationSize.value = 300

}

watch(width,()=>{
    if(width.value < 750){
        animationSize.value = 200
    } else{
        animationSize.value = 300

    }
})



</script>

<template>
    <div id="header" > 
        <header class=" flex h-[85vh] flex-col-reverse md:flex-row items-center justify-evenly bg-gradient-to-b from-light-background to-light-secondary   dark:from-dark-background dark:to-dark-secondary text-light-text dark:text-dark-text  translate-y-10">
            <div > 
                <h1 class="font-main font-bold text-4xl md:text-6xl flex"> {{ lang.lang['title-1']}}
                </h1>
                <h1 class="font-main text-4xl md:text-6xl"> {{ lang.lang['title-2']}} </h1>
                <h3 class="font-nunito font-medium text-lg md:text-2xl"> {{ lang.lang['title-3']}}</h3>
                <h3 class="font-nunito font-medium text-lg md:text-2xl"> {{ lang.lang['title-4']}}</h3>
                
                <a href="#about"  class="duration-100 hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] flex w-max items-center p-4 rounded-lg bg-light-primary dark:bg-dark-primary ">
                    <p> {{ lang.lang['button']}}</p> 
                    <font-awesome-icon
                    class="animate-bounce text-3xl px-2  text-light-text dark:text-dark-text"
                    :icon="['fas', 'arrow-circle-down']" />
                </a>
            </div>
            <div class="border rounded-full p-6">
                <Vue3Lottie :animationData="Animation" :height="animationSize" :width="animationSize" />
            </div>
        </header>
    </div>

    <Haikei link="Knowledge" :color="['secondary','primary']"/>

</template>

<style scoped>

</style>