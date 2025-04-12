<template>
  <div class=" overflow-x-hidden min-h-[1800px]">
    <Header />

    <main class="z-10">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>