// vue imports

import { createApp } from 'vue'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faDatabase, faClose, faPaperPlane, faLanguage,faSun,faMoon,faArrowCircleDown,faBezierCurve,faHighlighter,faVideo,faCode,faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3, faJsSquare, faPhp, faLaravel, faVuejs, faGit } from '@fortawesome/free-brands-svg-icons'

// project imports
import Vue3Lottie from 'vue3-lottie'
import './style.css'
import App from './App.vue'

// ***************
library.add(
    faFileLines,
    faBezierCurve,
    faHighlighter,
    faVideo,
    faCode,
    faDatabase,
    faGithub,
    faArrowCircleDown,
    faClose,
    faPaperPlane, 
    faLanguage, 
    faLinkedin, 
    faHtml5, 
    faCss3, 
    faJsSquare, 
    faPhp, 
    faLaravel, 
    faVuejs, 
    faGit,
    faSun,
    faMoon
)

// createApp(App).mount('#app')
createApp(App)
    .component('Vue3Lottie',Vue3Lottie)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
