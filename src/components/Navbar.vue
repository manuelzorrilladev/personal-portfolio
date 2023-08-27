<script setup>
import { ref } from 'vue';



const emit = defineEmits(['changeTheme','toggleLanguage'])
const theme = defineProps(['theme'])

const active = ref(theme.theme)
const language = ref(false)


const themeIcon = ref('sun')

if (active.value == 'light') {
    themeIcon.value = 'sun'

} else {
    themeIcon.value = 'moon'

}

const emitToggleTheme = () => {
    if (active.value == 'light') {
        active.value = 'dark'
        themeIcon.value = 'moon'

    } else {
        themeIcon.value = 'sun'
        active.value = 'light'
    }

    emit('changeTheme')
}

const emitToggleLanguage=(l)=>{
    language.value= !language.value
    emit('toggleLanguage',l)
}

</script>

<template>
    <div id="navbar"
        class="fixed flex items-center justify-between p-4  bg-light-background dark:bg-dark-background duration-200 w-full z-40 ">

        <a href="#header"
            class="curosr-pointer inline-block relative text-light-text dark:text-dark-text font-main text-4xl font-bold after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:bg-light-text dark:after:bg-dark-text after:scale-x-0 after:origin-bottom-right after:duration-200 hover:after:scale-100 hover:after:origin-bottom-left">
            &#60;MZ/&#62;</a>
        <div class="flex">

            <font-awesome-icon @click="[language = !language]"
                class="text-3xl p-2 cursor-pointer text-light-text dark:text-dark-text" :icon="['fas', 'language']" />

            <div @click="emitToggleTheme" class="bg-light-secondary dark:bg-dark-secondary cursor-pointer rounded-xl w-24">

                <font-awesome-icon
                    class=" text-3xl p-2 text-light-text dark:text-dark-text translate-x-0 dark:translate-x-14"
                    :icon="['fas', themeIcon]" />
            </div>
        </div>

    </div>

    <div class="fixed z-40 duration-100 flex w-full justify-end mt-2 -translate-x-24 " :class="[language ? 'translate-y-20' : '-translate-y-24']">
        <ul class="border border-light-secondary dark:border-dark-secondary  bg-light-background dark:bg-dark-background">
            <li @click="emitToggleLanguage('en')" class="cursor-pointer text-center hover:bg-light-primary text-light-text dark:text-dark-text  p-2">English
            </li>
            <li @click="emitToggleLanguage('es')" class="cursor-pointer text-center hover:bg-light-primary text-light-text dark:text-dark-text  p-2">Español
            </li>
        </ul>
</div></template>

<style scoped></style>