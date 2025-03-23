<template>
  <div>
    <Header />

    <main class="z-10 overflow-x-hidden min-h-[1800px]">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>