<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import Animation from '../data/contactAnimation.json'
const lang=defineProps(['lang'])


</script>


<template>
    <div id="contact" class="h-max text-light-text dark:text-dark-text w-full bg-light-gray-2 dark:bg-dark-gray-2 ">
        <h2 class="text-center font-main text-5xl font-bold">{{lang.lang['title-1']}}</h2>
        <p class="text-center font-nunito text-xl ">{{lang.lang['heading']}}</p>
        <div class="py-6 flex flex-col-reverse md:flex-row items-center  justify-evenly">
            <div class="flex rounded-md flex-col gap-4 bg-light-primary dark:bg-dark-primary p-4 w-[80%] md:w-1/2">
                <h2 class="text-center font-main text-4xl">{{lang.lang['title-2']}}</h2>
                

                <a class="duration-200 hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] font-main text-xl  flex w-full text-center  items-center p-4 rounded-lg bg-light-secondary dark:bg-dark-secondary" target="_blank" href="https://drive.google.com/file/d/1zghGMFlkG_BNpepMDaUOxZtShQuwHNIG/view?usp=drive_link">
                    <font-awesome-icon class=" text-4xl px-2  " :icon="['fas', 'file-lines']" />
                    C.V.
                </a>
                <a class="duration-200 hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] font-main text-xl  flex w-full text-center  items-center p-4 rounded-lg bg-light-secondary dark:bg-dark-secondary" target="_blank" href="mailto:manuelzorrilladev@gmail.com">
                    <font-awesome-icon class=" text-4xl px-2  " :icon="['fas', 'paper-plane']" />
                    {{lang.lang['email']}}
                </a>
                <a class="duration-200 hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] font-main text-xl  flex w-full text-center  items-center p-4 rounded-lg bg-light-secondary dark:bg-dark-secondary" target="_blank" href="https://github.com/manuelzorrilladev">
                    <font-awesome-icon class=" text-4xl px-2  " :icon="['fab', 'github']" />
                    Github
                </a>
                <a class="duration-200 hover:shadow-[5px_5px_0px_0px_#121212] dark:hover:shadow-[5px_5px_0px_0px_#808080] font-main text-xl  flex w-full text-center  items-center p-4 rounded-lg bg-light-secondary dark:bg-dark-secondary" target="_blank" href="https://github.com/manuelzorrilladev">
                    <font-awesome-icon class=" text-4xl px-2  " :icon="['fab', 'linkedin']" />
                    LinkedIn
                </a>



            </div>
            <Vue3Lottie class="m-0" :animationData="Animation" :height="400" :width="400" />
        </div>
    </div>
</template>