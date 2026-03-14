<template>
  <div id="layout" class="animate-fade-in-1s w-full bg-[#43c6ac] bg-gradient-to-b from-[#e8f6f3] to-[#bdfff3] min-h-screen">
    <div class="w-full h-[calc(100%-9rem)] relative">
      <nav class="flex flex-row fixed left-0 w-full h-[50px] m-0 px-4 border-0 z-50">
        <div class="w-full sm:ml-auto flex h-[50px] justify-end space-x-4 sm:space-x-8 lg:space-x-12 px-4 sm:px-12 items-center">
          <router-link to="/" class="nav-link py-4 !text-[15px] inline-block text-center border-t-[3px] border-transparent hover:!border-[#00ade6]" active-class="!border-[#00ade6] [border-image:linear-gradient(180deg,#00ade6_0,#05e3d5)_2]">home</router-link>
          <a href="#about" class="nav-link py-4 !text-[15px] inline-block text-center border-t-[3px] hover:!border-[#00ade6]" :class="currentHash === '#about' ? '!border-[#00ade6] [border-image:linear-gradient(180deg,#00ade6_0,#05e3d5)_2]' : 'border-transparent'">about</a>
          <a href="#skills" class="nav-link py-4 !text-[15px] inline-block text-center border-t-[3px] hover:!border-[#00ade6]" :class="currentHash === '#skills' ? '!border-[#00ade6] [border-image:linear-gradient(180deg,#00ade6_0,#05e3d5)_2]' : 'border-transparent'">skills</a>
          <a href="#projects" class="nav-link py-4 !text-[15px] inline-block text-center border-t-[3px] hover:!border-[#00ade6]" :class="currentHash === '#projects' ? '!border-[#00ade6] [border-image:linear-gradient(180deg,#00ade6_0,#05e3d5)_2]' : 'border-transparent'">projects</a>
          <a href="#contact" class="nav-link py-4 !text-[15px] inline-block text-center border-t-[3px] hover:!border-[#00ade6]" :class="currentHash === '#contact' ? '!border-[#00ade6] [border-image:linear-gradient(180deg,#00ade6_0,#05e3d5)_2]' : 'border-transparent'">contact</a>
        </div>
      </nav>
      <div class="min-w-[500px] my-[50px] mx-auto p-6">
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
    <footer class="w-full"></footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import About from './About.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

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
