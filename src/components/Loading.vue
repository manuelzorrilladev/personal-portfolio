<script setup>
 const lang = defineProps(['lang'])

</script>

<template>
  
        <div class=" w-full h-screen fixed z-50 bg-light-primary dark:bg-dark-secondary text-light-text dark:text-dark-text flex flex-col items-center justify-center">
            <h2 v-if="lang.lang =='es'" class="font-main text-3xl font-bold">Cargando Info...</h2>
            <h2 v-else class="font-main text-3xl font-bold">Loading data...</h2>
           
            <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle class="stroke-white" cx="50" cy="50" fill="none"  stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
  
</template>
<style scoped>




.spinner_9Mto {
    animation: spinner 1.6s linear infinite;
    fill: white;
}

.spinner_bb12 {
    animation-delay: -1s
}

@keyframes spinner {
    12.5% {
        x: 13px;
        y: 1px
    }

    25% {
        x: 13px;
        y: 1px
    }

    37.5% {
        x: 13px;
        y: 13px
    }

    50% {
        x: 13px;
        y: 13px
    }

    62.5% {
        x: 1px;
        y: 13px
    }

    75% {
        x: 1px;
        y: 13px
    }

    87.5% {
        x: 1px;
        y: 1px
    }
}
</style>
