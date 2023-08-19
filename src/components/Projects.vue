<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useWindowSize } from '@vueuse/core'
import projectJSON from '../data/project.json'
import Haikei from './svgComponents/Haikei.vue'
import { ref, watch } from 'vue'

const {lang,language}=defineProps(['lang','language'])
const { width } = useWindowSize()

const screenSize = ref(768)

watch(width,()=>{
    screenSize.value = width.value
})

let a = "/src/assets/img/imageuploader.png"

</script>

<template>
    <div id="Projects" class="p-5 h-max w-full text-light-text dark:text-dark-text bg-light-primary dark:bg-dark-primary">
       
       
        <header class=" flex flex-col items-center p-4  ">
            <h2 class="font-main text-4xl md:text-5xl font-bold">{{ lang['title-1']}}</h2>
            <p class="font-nunito text-xl ">{{ lang['heading']}}</p>
            <a class="duration-100 hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] font-main text-xl  flex w-max text-center  items-center p-4 rounded-lg bg-light-secondary dark:bg-dark-secondary " href="https://github.com/manuelzorrilladev" target="_blank">
                Github <font-awesome-icon class=" text-4xl px-2  " :icon="['fab', 'github']" /> 
            </a>
            
        </header>
        
            
       <div class="bg-indigo-900  rounded-md   backdrop-blur-xl bg-opacity-50 dark:bg-opacity-30  m-8  p-4 border-light-text dark:border-dark-text border-4">
        <h1 class="font-main text-4xl text-center font-bold">{{ lang['heading-2']}}</h1>
        <carousel class="m-4"  :items-to-show="1">
            <slide v-for="(item,key) in projectJSON" :key="key" >
                <a  :href="item.url"   target="_blank" class="group relative w-[40vw]">
                    <img class="w-full object-cover" :src="`/assets/${item.img}`" alt="" />
                        
                    <div
                        class="absolute  top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-light-gray-2 dark:bg-dark-gray-2 hover:bg-opacity-80 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                        <h1 class="text-xl font-main text-white">{{item.name}}</h1>
                        <p v-if=" language=='es'" class="font-nunito text-white ">{{item.description.es}}</p>
                        <p v-else class="font-nunito">{{item.description.en}}</p> 
                        <a class="font-nunito tex hidden md:block mt-5 px-2 py-3 rounded  hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] bg-light-primary text-white dark:bg-dark-primary duration-300" :href="item.url" target="_blank">{{ lang['button']}}</a>
                    </div>
                </a>
            </slide>
        
            <template v-if="width>=768" #addons>
                <navigation class="w-10 h-10 absolute" />
              </template>
          </carousel>
       </div>


        

    </div>
    <Haikei link="contact" :color="['primary','gray-2']"/>
</template>