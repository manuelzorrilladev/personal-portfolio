<script setup>
import { ref, watch } from 'vue';
import { usePreferredLanguages } from '@vueuse/core'
import { useStorage } from '@vueuse/core'


import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Knowledge from './components/Knowledge.vue'
import Wave from './components/svgComponents/Wave.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

import langJson from './data/lang.json'
const data = ref('')



const systemLanguage = usePreferredLanguages()
const language = ref(systemLanguage.value[1])
if (language.value == 'es') {
  data.value = langJson.spanish
} else {
  data.value = langJson.english

}

const theme = useStorage('theme', 'light')

const toggleLanguage = (l) => {
  if (l == 'es') {
    language.value = 'es'
  } else {
    language.value = 'en'

  }
}

watch(language, () => {
  if (language.value == 'es') {
    data.value = langJson.spanish
  } else {
    data.value = langJson.english

  }
})



const changeTheme = () => {
  if (theme.value == 'light') {
    theme.value = 'dark'


  } else {
    theme.value = 'light'

  }

}
</script>

<template>
  <main :class="theme" class="duration-200">
    <Navbar @toggle-language="toggleLanguage" @change-theme="changeTheme" :theme="theme" />
    <Header :lang="data.header" />
    <Wave />
    <About :lang="data.about" />
    <Knowledge :lang="data.knowledge" />
    <Projects :language="language" :lang="data.projects" />
    <Contact :lang="data.contact" />
    <Footer :lang="data.footer" />
  </main>
</template>

