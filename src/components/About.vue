<script setup>
import ForestSVG from './svgComponents/ForestSVG.vue'
import Haikei from './svgComponents/Haikei.vue'

const lang=defineProps(['lang'])
</script>


<template>


    <div  class="absolute z-20  flex flex-col lg:flex-row justify-center items-center md:justify-center h-screen  text-light-text dark:text-dark-text">
        <img class="w-32 md:w-40 lg:w-80 px-6" src="../assets/img/Foto.png" alt="image">
        <header class="w-full gap-2 flex flex-col justify-center items-center">
            <div class=" w-[85%] lg:w-3/4 p-4 bg-indigo-900  rounded-md   backdrop-blur-xl bg-opacity-50 dark:bg-opacity-30   border-light-text dark:border-dark-text border-4">
                <h1 class="font-main font-bold text-xl md:text-2xl lg:text-4xl">{{lang.lang['title']}}</h1>
                <p class="font-nunito text-xs sm:text-md lg:text-lg">
                   {{ lang.lang['p']}}
                </p>
                    
            </div>
            <div class=" w-[85%] lg:w-3/4 p-4 bg-indigo-900  rounded-md   backdrop-blur-xl bg-opacity-50 dark:bg-opacity-30   border-light-text dark:border-dark-text border-4">
                <h1 class="font-main font-bold text-lg md:text-xl lg:text-2xl"> {{ lang.lang['study']}}</h1>
                <p class="font-nunito text-xs xs:text-md lg:text-lg">
                    {{ lang.lang['title-2']}} 
                </p>
                <p class="font-nunito text-xs sm:text-md lg:text-lg">
                    🔹 Caracas, Venezuela 
                </p>
                <p class="font-nunito text-xs sm:text-md lg:text-lg">
                    {{ lang.lang['p-2']}}
                </p>
                <p class="font-nunito text-xs sm:text-md lg:text-lg">
                    🔹 2020 - 2022
                </p>
                    
            </div>
        </header>
    </div>
    <div class="">
        <ForestSVG />
    </div>
    <Haikei link="Knowledge" :color="['gray-1','secondary']"/>
<!--   -->

</template>
