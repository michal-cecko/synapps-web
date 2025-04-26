<template>
  <section class="projects-archive-section relative z-10 mb-[6rem] md:mb-[10rem] min-h-screen pt-[20vh]">
    <div class="md:block hidden bg-primary-yellow w-[30vw] h-[20vw] absolute top-[10%] -left-[15vw]" style="filter: blur(10vw)"></div>
    <div class="md:block hidden bg-primary-orange w-[30vw] h-[20vw] absolute top-[30%] right-[10vw]" style="filter: blur(7vw)"></div>

    <div class="container h-full mx-auto px-lg-0 px-4 z-10 relative">
      <h2 class="mb-6" data-aos="fade-up">Naše projekty</h2>
      <p class="mb-16 max-w-[700px]" data-aos="fade-up" data-aos-delay="100">
        Pozrite si výber z našich najlepších projektov, ktoré sme realizovali pre našich klientov. Každý projekt je jedinečný a prispôsobený špecifickým potrebám zákazníka.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Map through projects array -->
        <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="project-item group relative aspect-[4/3] overflow-hidden"
            :data-aos="'fade-up'"
            :data-aos-delay="150 + (index * 50)"
        >
          <div class="pointer-events-none absolute top-0 left-0 z-10 bg-[rgba(15,15,15,0.65)] w-full h-full flex flex-col justify-end p-6 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
            <h5 class="transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">{{ project.title }}</h5>
            <p class="text-[#C9C9C9] transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">{{ project.description }}</p>
          </div>
          <a :href="project.url" target="_blank" class="block w-full h-full">
            <img
                :src="project.thumbnailUrl"
                :alt="project.title"
                class="w-full h-full object-cover"
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projectsData } from '~/data/projects';

// Use the imported projects data
const projects = projectsData;

// Add SEO metadata for the Projects page
useHead({
  title: 'Synapps | Naše projekty',
  meta: [
    {
      name: 'description',
      content: 'Prehliadka našich realizovaných projektov - webové aplikácie, informačné systémy a mobilné riešenia vytvorené na mieru pre našich klientov. Každý projekt je jedinečný a prispôsobený špecifickým potrebám zákazníka.'
    },
    {
      property: 'og:title',
      content: 'Naše projekty | Moderné digitálne riešenia'
    },
    {
      property: 'og:description',
      content: 'Prehliadka našich realizovaných projektov - webové aplikácie, informačné systémy a mobilné riešenia vytvorené na mieru pre našich klientov.'
    }
  ]
})

</script>

<style scoped>
.project-item {
  transition: transform 0.3s ease;
}

.project-item img {
  transition: transform 0.6s ease;
}

.project-item:hover img {
  transform: scale(1.05);
}
</style>