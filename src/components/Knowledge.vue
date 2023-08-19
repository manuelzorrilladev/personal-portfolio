<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import Animation from '../data/codeAnimation.json'
import programsAnimation from '../data/programsAnimation.json'
import LoadingItem from './svgComponents/LoadingItem.vue'
import Haikei from './svgComponents/Haikei.vue'


const lang=defineProps(['lang'])

</script>


<template>
    
    <div  class="h-max  bg-light-secondary dark:bg-dark-secondary">

        <h2 class="text-light-text dark:text-dark-text font-main text-4xl md:text-5xl text-center"> {{ lang.lang['title-1']}}</h2>
        <div class="flex flex-col md:flex-row items-center justify-evenly py-12">
            <div >
                <Vue3Lottie :animationData="Animation" :height="300" :width="300" />
            </div>
            <header class="text-light-text dark:text-dark-text w-3/4 md:w-1/2">
                <h2 class="font-main text-3xl md:text-4xl">{{ lang.lang['title-2']}}</h2>
                <div >
                    <LoadingItem 
                        iconType="fab" 
                        icon="js-square" 
                        name="JavaScript" 
                        status="90"/>
                    <LoadingItem 
                        iconType="fab" 
                        icon="vuejs" 
                        name="Vue Js" 
                        status="80"/>
                    <LoadingItem 
                        iconType="fab" 
                        icon="php" 
                        name="PHP" 
                        status="70"/>
                    <LoadingItem 
                        iconType="fab" 
                        icon="laravel" 
                        name="Laravel (PHP)" 
                        status="60"/>
                    <LoadingItem 
                        iconType="fab" 
                        icon="css3" 
                        name="CSS (Tailwind)" 
                        status="100"/>
                    <LoadingItem 
                        iconType="fab" 
                        icon="git" 
                        name="Git" 
                        status="50"/>
                    
                </div>
            </header>
        </div>
        <div class="flex flex-col-reverse md:flex-row items-center justify-evenly py-12">
            
            <header class="text-light-text dark:text-dark-text w-3/4 md:w-1/2">
                <h2 class="font-main text-3xl md:text-4xl">{{ lang.lang['title-1']}}</h2>
                <div >
                    <LoadingItem 
                        iconType="fas" 
                        icon="highlighter" 
                        name="Adobe Photoshop" 
                        status="80"/>
                    <LoadingItem 
                        iconType="fas" 
                        icon="bezier-curve" 
                        name="Adobe Illustrator" 
                        status="40"/>
                    <LoadingItem 
                        iconType="fas" 
                        icon="code" 
                        name="Visual Studio Code" 
                        status="95"/>
                    <LoadingItem 
                        iconType="fas" 
                        icon="video" 
                        name="Adobe Premiere" 
                        status="70"/>
                    
                    
                    
                </div>
            </header>
            <div >
                <Vue3Lottie :animationData="programsAnimation" :height="300" :width="300" />
            </div>  
        </div>
    </div>
    <Haikei link="Projects" :color="['secondary','primary']"/>

</template>