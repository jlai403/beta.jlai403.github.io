<template>
  <div id="layout" class="fadeIn one">
    <div class="container wrapper">
      <nav class="navbar">
        <div class="nav-links">
          <div class="col-xs-2"></div>
          <router-link to="/" class="nav-link" active-class="active">home</router-link>
          <a href="#about" class="nav-link" :class="{ active: currentHash === '#about' }">about</a>
          <a href="#skills" class="nav-link" :class="{ active: currentHash === '#skills' }">skills</a>
          <a href="#projects" class="nav-link" :class="{ active: currentHash === '#projects' }">projects</a>
          <a href="#contact" class="nav-link" :class="{ active: currentHash === '#contact' }">contact</a>
        </div>
      </nav>
      <div class="content">
        <div id="about" class="element">
          <About />
        </div>
        <div id="skills" class="element">
          <Skills />
        </div>
        <div id="projects" class="element">
          <Projects />
        </div>
        <div id="contact" class="element">
          <Contact />
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import './MainLayout.scss'

const route = useRoute()
const currentHash = ref(route.hash)

const updateHash = () => {
  currentHash.value = window.location.hash
}

onMounted(() => {
  window.addEventListener('hashchange', updateHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', updateHash)
})
</script>
