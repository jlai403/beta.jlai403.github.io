<template>
  <div id="homepage" class="text-center text-[#2c3e50] flex items-center justify-center h-full w-full p-0 bg-[url('https://source.unsplash.com/featured/?zen')] bg-center bg-no-repeat bg-cover relative">
    <div class="w-full h-[270px] max-w-[650px] -mt-10 absolute bg-[url('https://source.unsplash.com/featured/?zen')] bg-center bg-no-repeat bg-fixed bg-cover blur-[15px] overflow-hidden"></div>

    <div class="w-full border border-[#aaaaaa] -mt-20 max-w-[650px] p-16 text-center bg-white/50 relative z-10">
      <div class="w-full relative">
        <h1 class="w-full font-roboto text-[45px] uppercase text-[#333333]">joey lai</h1>
        <div class="font-roboto text-[17.5px] mb-2.5 uppercase">software developer & lifelong learner</div>
      </div>

      <div class="w-full">

        <div class="w-full text-[15px] mt-2 flex justify-center gap-2">
          <a class="social-icon text-[#2c3e50] hover:text-white hover:!bg-linkedin" href="https://ca.linkedin.com/in/jlai403" target="_blank" rel="noopener noreferrer"> <i class="fa fa-linkedin"></i> </a>
          <a class="social-icon text-[#2c3e50] hover:text-white hover:!bg-github" href="https://github.com/jlai403" target="_blank" rel="noopener noreferrer"> <i class="fa fa-github"></i> </a>
          <a class="social-icon text-[#2c3e50] hover:text-white hover:!bg-instagram-bg" href="https://instagram.com/_jlai/" target="_blank" rel="noopener noreferrer"> <i class="fa fa-instagram"></i> </a>
        </div>
      </div>

      <div class="main-background"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Replaced Home.scss with Tailwind utility classes
</script>
