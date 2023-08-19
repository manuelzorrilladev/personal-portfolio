<script setup>

const { iconType, icon, name, status } = defineProps([
    'iconType',
    'icon',
    'name',
    'status']
)
const statusBar=`width:${status}%;`





</script>



<template>
    <div id="item" class="flex items-center p-2 gap-3  w-full">

        <font-awesome-icon class=" text-4xl px-2  " :icon="[iconType, icon]" />
        <div>
            <h3 class="font-main font-bold">{{name}}</h3>
            <div class="block h-2 bg-light-text dark:bg-dark-text w-[40vw] rounded-md ">
                <span class="block h-2 bg-indigo-700  rounded-md " 
                :style="statusBar"></span>
            </div>
        </div>
    </div>
</template>