<script setup>

const {color,link} =  defineProps(['color','link'])

let fillColor = [color]

</script>


<template>
    <div :id="link" class=" fill-light-secondary  w-full overflow-hidden ">
        <svg id="visual" viewBox="0 0 1600 100" width="1600" height="100" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <rect x="0" y="0" width="1600" height="100" 
            :class="[`fill-light-${fillColor[0][0]} dark:fill-dark-${fillColor[0][0]}`]"
            ></rect>
        <path :class="[`fill-light-${fillColor[0][1]} dark:fill-dark-${fillColor[0][1]}`]"
            d="M0 73L53.3 69.8C106.7 66.7 213.3 60.3 320 52.8C426.7 45.3 533.3 36.7 640 34.2C746.7 31.7 853.3 35.3 960 42.7C1066.7 50 1173.3 61 1280 64C1386.7 67 1493.3 62 1546.7 59.5L1600 57L1600 101L1546.7 101C1493.3 101 1386.7 101 1280 101C1173.3 101 1066.7 101 960 101C853.3 101 746.7 101 640 101C533.3 101 426.7 101 320 101C213.3 101 106.7 101 53.3 101L0 101Z"
             stroke-linecap="round" stroke-linejoin="miter"></path>
    </svg>
</div>
</template>

<!-- fill-light-secondary dark:fill-dark-secondary OKKKK -->
<!-- fill-light-gray-2 dark:fill-dark-gray-2 -->