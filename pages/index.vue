<template>
  <div class="hero-section relative" style="height: min(900px, 100vh); max-height: 900px">
    <img src="@/public/images/blur-hero-desktop.png" alt="Blur" class="absolute -right-[20rem]">

    <div class="container h-full mx-auto py-20 z-10 relative">
      <div class="h-full flex flex-col md:flex-row">
        <!-- Left Column - Text with typing animation -->
        <div class="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <div class="!px-0 min-h-[400px]">
            <h1>
              <span ref="typingElement"></span>
            </h1>
            <h1 class="text-gray-300 whitespace-nowrap">pre váš biznis</h1>
          </div>
        </div>

        <!-- Right Column with absolutely positioned image -->
        <div class="w-full md:w-1/2 relative overflow-visible">
          <img src="@/public/images/hero.png" alt="Logo"
               class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[20px] w-[140%] max-w-none h-auto">
        </div>
      </div>

      <p class="absolute bottom-0 left-0 max-w-[380px] pb-10">Pomáhame ľuďom automatizovať procesy v práci a zviditeľnovať ich identitu na webe</p>

      <ArrowIcon class="absolute bottom-[20px] right-0 -translate-y-1/2 scroll-hint-arrow" />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import Typed from 'typed.js'
import ArrowIcon from '~/assets/svg/arrow.svg?component'

const typingElement = ref(null)
let typedInstance = null

onMounted(() => {
  typedInstance = new Typed(typingElement.value, {
    strings: [
      '<span class="text-primary-yellow">Digitalizujeme<br>procesy</span>',
      '<span class="text-primary-orange">Automatizujeme<br>všeličo</span>'
    ],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 3000,
    startDelay: 300,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    // Allow HTML in the strings
    contentType: 'html'
  })
})

// Clean up when component is unmounted
onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy()
  }
})
</script>

<style scoped>
/* Animation for the arrow to glide up and down */
@keyframes glide {
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, calc(-50% + 20px)); /* Moves 8px down at the middle point */
  }
}

/* Apply the animation to the arrow */
.scroll-hint-arrow {
  animation: glide 2s ease-in-out infinite;
}
</style>