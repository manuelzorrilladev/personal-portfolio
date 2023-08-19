<script setup>
const lang=defineProps(['lang'])

</script>

<template>


    
<footer class="bg-white  shadow dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
           
                <a href="#header"
            class="mb-4 sm:mb-0 cursor-pointer inline-block relative text-light-text dark:text-dark-text font-main text-4xl font-bold after:content-[''] after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:bg-light-text dark:after:bg-dark-text after:scale-x-0 after:origin-bottom-right after:duration-200 hover:after:scale-100 hover:after:origin-bottom-left">
            &#60;MZ/&#62;</a>
        
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#about" class="mr-4 hover:underline md:mr-6 ">{{lang.lang['item-1']}}</a>
                </li>
                <li>
                    <a href="#Knowledge" class="mr-4 hover:underline md:mr-6">{{lang.lang['item-2']}}</a>
                </li>
                <li>
                    <a href="#Projects" class="mr-4 hover:underline md:mr-6 ">{{lang.lang['item-3']}}</a>
                </li>
                <li>
                    <a href="#contact" class="hover:underline">{{lang.lang['item-4']}}</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">{{lang.lang['item-5']}}</span>
    </div>
</footer>


</template>