<template>
  <!-- Hero Section -->
  <section class="hero-section relative h-screen mb-[6rem] md:mb-[10rem] md:py-0 pt-[15vh]">
    <div class="md:hidden block bg-primary-orange w-[70vw] h-[44vw] absolute top-[0] -right-[20vw]" style="filter: blur(16vw)"></div>
    <div class="md:block hidden bg-primary-orange w-[30vw] h-[20vw] absolute top-[20%] -right-[15vw]" style="filter: blur(10vw)"></div>

    <div class="md:hidden block bg-primary-yellow w-[44vw] h-[44vw] absolute top-[20%] right-[0px]" style="filter: blur(20vw)"></div>
    <div class="md:block hidden bg-primary-yellow w-[30vw] h-[20vw] absolute top-[30%] right-[10vw]" style="filter: blur(7vw)"></div>

    <div class="container h-full mx-auto px-lg-0 px-4 z-10 relative">
      <div class="md:h-full flex flex-col md:flex-row gap-[3rem]">
        <!-- Left Column - Text with typing animation -->
        <div class="typing-wrapper w-full md:w-1/2 flex items-center md:order-1 order-2 md:mb-0 mb-6" data-aos="fade-up">
          <div class="!px-0 md:min-h-[400px] max-h-[300px] h-full md:relative absolute md:top-0 top-[1vh]">
            <h1>
              <span ref="typingElement"></span>
            </h1>
            <h1 class="text-gray-300 whitespace-nowrap">pre váš biznis</h1>
          </div>
        </div>

        <!-- Right Column with absolutely positioned image -->
        <div class="w-full md:w-1/2 relative overflow-visible md:order-2 order-1 md:mt-0 mt-[5vh]" data-aos="fade-up" data-aos-delay="200">
          <img src="@/public/images/homepage/hero.png" alt="Hero image" class="md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2 md:-translate-x-[20px] md:w-[140%] w-[130%] max-w-none h-auto">
        </div>
      </div>

      <p class="md:absolute md:bottom-3 md:left-0 md:max-w-[380px] md:pb-10 md:mt-0 mt-[26vh]"
         data-aos="fade-up" data-aos-delay="300">
        Pomáhame ľuďom automatizovať procesy v práci a zviditeľnovať ich identitu na webe
      </p>

      <ArrowIcon class="scroll-hint-arrow md:absolute md:bottom-[30px] md:right-0 md:-translate-y-1/2 mx-auto md:mt-0 mt-10"
                 data-aos="fade-up" data-aos-delay="400"/>
    </div>
  </section>

  <!-- About Section -->
  <section class="about-section z-10 relative mb-[9rem] md:mb-[10rem]">
    <div class="absolute -mt-[10rem]" id="onas"></div>

    <div class="container h-full mx-auto px-lg-0 px-4 z-10 relative">
      <div class="h-full flex flex-col md:flex-row gap-[9rem] lg:gap-[5rem]">
        <!-- Left Column - About text -->
        <div class="w-full md:w-1/2 flex-col flex items-start justify-center max-w-[500px]" data-aos="fade-up">
          <h4>Vývoj aplikácii, webov a&nbsp;systémov</h4>
          <p class="mt-6">
            Pomáhame firmám i jednotlivcom rásť v digitálnom svete. Tvoríme prehľadné webové aplikácie, informačné
            systémy, mobilné appky a e-shopy, ktoré šetria čas a zjednodušujú prácu. Každé riešenie prispôsobujeme
            individuálnym potrebám.
          </p>
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center relative" data-aos="fade-up" data-aos-delay="200">
          <Logo class="logo-about-us absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-auto z-0"/>
          <img src="@/public/images/homepage/infinity.png" alt="O nás" class="z-10 md:w-[85%] w-full h-auto">
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="projects-section z-10 relative md:mb-[12rem] mb-[7rem]">
    <div class="container h-full mx-auto px-lg-0 px-4 z-10 relative">
      <h2 class="mb-12" data-aos="fade-up">Projekty</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-auto">
        <!-- Left column - three smaller elements -->
        <div class="space-y-4 flex flex-col h-full">
          <NuxtLink to="/projekty/dodoworkout" class="w-full h-auto relative group" data-aos="fade-up" data-aos-delay="100">
            <div class="pointer-events-none absolute top-0 left-0 z-10 bg-[rgba(15,15,15,0.75)] w-full h-full flex flex-col justify-end p-8 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
              <h5 class="transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Dodoworkout</h5>
              <p class="text-[#C9C9C9] transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Web pre trénera</p>
            </div>
            <img class="z-0" src="@/public/images/homepage/project-cards/dodoworkout.jpg" alt="Eshop">
          </NuxtLink>
          <NuxtLink to="/projekty/streetworkoutkysuce" class="w-full h-auto relative group" data-aos="fade-up" data-aos-delay="200">
            <div class="pointer-events-none absolute top-0 left-0 z-10 bg-[rgba(15,15,15,0.75)] w-full h-full flex flex-col justify-end p-8 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
              <h5 class="transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Street Workout Kysuce</h5>
              <p class="text-[#C9C9C9] transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Web športového tímu</p>
            </div>
            <img class="z-0" src="@/public/images/homepage/project-cards/streetworkoutkysuce.jpg" alt="Web športového tímu">
          </NuxtLink>
          <NuxtLink to="/projekty" class="projects-link w-full flex-grow relative justify-center items-center overflow-hidden hidden md:flex" data-aos="fade-up" data-aos-delay="300">
          <span class="block bg-primary-orange w-[20vw] h-[140%] absolute -top-[20%] -left-[30%] z-0"
                style="filter: blur(6vw)"></span>
            <span class="block bg-primary-yellow w-[20vw] h-[140%] absolute -top-[30%] -right-[30%] z-0"
                  style="filter: blur(6vw)"></span>
            <span class="text-content text-[28px] font-medium z-10">Ďalšie projekty</span>
          </NuxtLink>
        </div>
        <!-- Right column - two bigger elements -->
        <div class="flex flex-col space-y-4 h-full">
          <NuxtLink to="/projekty/dashboard" class="w-full h-auto relative flex-1 group" data-aos="fade-up" data-aos-delay="150">
            <div class="pointer-events-none absolute top-0 left-0 z-10 bg-[rgba(15,15,15,0.75)] w-full h-full flex flex-col justify-end p-8 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
              <h5 class="transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Dashboard</h5>
              <p class="text-[#C9C9C9] transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Informačný systém na správu internetového obchodu</p>
            </div>
            <img src="@/public/images/homepage/project-cards/dashboard.jpg" alt="Admin Dashboard">
          </NuxtLink>
          <NuxtLink to="/projekty/trimbarbers" class="w-full h-auto relative flex-1 group" data-aos="fade-up" data-aos-delay="250">
            <div class="pointer-events-none absolute top-0 left-0 z-10 bg-[rgba(15,15,15,0.75)] w-full h-full flex flex-col justify-end p-8 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
              <h5 class="transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">3M Barbers</h5>
              <p class="text-[#C9C9C9] transition-all duration-400 ease-in-out transform translate-y-4 group-hover:translate-y-0">Web s rezervačným systémom pre barbershop</p>
            </div>
            <img src="@/public/images/homepage/project-cards/trimbarbers.jpg" alt="Barbershop" class="hidden md:block">
            <img src="@/public/images/homepage/project-cards/trimbarbers-mobile.jpg" alt="Barbershop" class="md:hidden block">
          </NuxtLink>
          <NuxtLink to="/projekty" class="projects-link w-full flex-grow relative justify-center items-center overflow-hidden md:hidden flex min-h-[13rem]" data-aos="fade-up" data-aos-delay="300">
          <span class="block bg-primary-orange w-[50vw] h-[140%] absolute -top-[20%] -left-[30%] z-0"
                style="filter: blur(16vw)"></span>
            <span class="block bg-primary-yellow w-[50vw] h-[140%] absolute -top-[30%] -right-[30%] z-0"
                  style="filter: blur(16vw)"></span>
            <span class="text-content text-[36px] font-medium z-10">Ďalšie projekty</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Cooperation Section -->
  <section class="cooperation-section z-10 relative mb-[4rem] md:mb-[10rem]">
    <div class="absolute -mt-[5rem]" id="spolupraca"></div>
    <div class="bg-primary-yellow w-[30vw] h-[40vw] absolute top-[20%] -left-[28vw] hidden lg:block" style="filter: blur(10vw)"></div>
    <div class="bg-primary-yellow w-[50vw] h-[65vw] absolute top-[20%] -left-[50vw] lg:hidden block" style="filter: blur(30vw)"></div>

    <div class="container h-full mx-auto px-lg-0 px-4 z-10 relative">
      <h2 class="mb-16 max-w-[700px]" data-aos="fade-up">Ako bude vyzerať naša spolupráca?</h2>
      <div class="h-full flex flex-col lg:flex-row gap-[3rem] lg:gap-[5rem]">
        <div class="left-column" data-aos="fade-up" data-aos-delay="100">
          <p
              v-for="(item, index) in items"
              :key="index"
              @click="showItem(index)"
              :class="{ 'active': activeIndex === index }"
              class="list-heading text-[24px] text-left min-w-[300px] block mb-4 transition-colors duration-300 cursor-pointer"
          >
            {{ item.heading }}
          </p>
        </div>
        <div class="middle-column relative min-w-[300px] lg:block hidden" data-aos="fade-up" data-aos-delay="200">
          <!-- Improved image transition -->
          <div class="image-container relative">
            <transition name="crossfade" mode="out-in">
              <img
                  :key="activeIndex"
                  :src="`/images/homepage/process/${items[activeIndex].imgSrc}`"
                  :alt="items[activeIndex].heading"
                  class="w-[300px] h-auto"
              />
            </transition>
          </div>
        </div>
        <div class="right-column relative" data-aos="fade-up" data-aos-delay="300">
          <!-- Improved content transition -->
          <transition name="crossfade" mode="out-in">
            <div :key="activeIndex" class="content-block">
              <p class="text-white text-lg mb-8">{{ items[activeIndex].content1 }}</p>
              <p>{{ items[activeIndex].content2 }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import Typed from 'typed.js'
import ArrowIcon from '~/assets/svg/arrow.svg?component'
import Logo from '~/assets/svg/logo/logo.svg?component'

const typingElement = ref(null)
let typedInstance = null

onMounted(() => {
  typedInstance = new Typed(typingElement.value, {
    strings: [
      '<span class="text-primary-orange">Moderná<br>webstránká</span>',
      '<span class="text-primary-yellow">Prehľadný<br>systém</span>',
      '<span class="text-primary-orange">Mobilná<br>aplikácia</span>',
      '<span class="text-primary-yellow">Automatizácia<br>procesov</span>',
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

const items = [
  {
    heading: 'Analýza Vašich potrieb',
    imgSrc: '1.jpg',
    content1: 'Na začiatku sa s vami podrobne porozprávame, aby sme pochopili vaše ciele, výzvy a potreby. ',
    content2: 'Tento krok nám pomôže definovať, aké digitálne riešenie bude pre vás najefektívnejšie. Spoločne vypracujeme základné predpoklady pre projekt a jasne stanovíme jeho smer.'
  },
  {
    heading: 'Návrh a odhad trvania',
    imgSrc: '2.jpg',
    content1: 'Na základe analýzy vytvoríme detailný plán riešenia vrátane funkcií, dizajnu a potrebných technológií.',
    content2: 'Vypracujeme harmonogram s presným odhadom časovej náročnosti a finančných nákladov. Všetky návrhy s vami prekonzultujeme a prispôsobíme podľa vašich pripomienok.'
  },
  {
    heading: 'Zapracovanie a vývoj',
    imgSrc: '3.jpg',
    content1: 'Po schválení návrhu začíname s vývojom. Počas celého procesu vás pravidelne informujeme o postupe.',
    content2: 'Najprv naši grafici a dizajnéri pripravia vizuálnu stránku, následne programátorský tím implementuje všetky funkcionality. Priebežne testujeme celý systém a prekonzultujeme s vami prípadné zmeny.'
  },
  {
    heading: 'Odovzdanie a podpora',
    imgSrc: '4.webp',
    content1: 'Po dokončení vývoja vám predstavíme finálne riešenie a zaškolíme vás v jeho používaní.',
    content2: 'Zabezpečujeme aj následnú technickú podporu a údržbu systému. V prípade potreby vám pomôžeme s ďalším rozvojom a vylepšením funkcionalít.'
  }
];

// Track which item is active
const activeIndex = ref(0);

// Function to show a specific item
const showItem = (index) => {
  activeIndex.value = index;
};

// Clean up when component is unmounted
onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy()
  }
})
</script>

<style scoped>

.projects-section {
  img {
    width: 100%;
    height: auto;
  }
}

.typing-wrapper {
  h1 {
    @media (max-width: 768px) {
      font-size: 14vw !important;
    }
  }
}

.projects-link {
  .bg-primary-orange,
  .bg-primary-yellow,
  .text-content {
    transition: all 0.3s ease;
  }
  @media(hover: hover) {
    &:hover {
      .bg-primary-orange {
        transform: translate(-2vw, 9vw);
      }
      .bg-primary-yellow {
        transform: translate(-1vw, -6vw);
      }
      .text-content {
        transform: scale(1.05);
      }
    }
  }
}

.logo-about-us :deep(path) {
  fill: #191919 !important;
}

/* Animation for the arrow to glide up and down */
@keyframes glide {
  0%, 100% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(calc(-50% + 20px)); /* Moves 8px down at the middle point */
  }
}

/* Apply the animation to the arrow */
.scroll-hint-arrow {
  animation: glide 2s ease-in-out infinite;
}

.list-heading {
  font-weight: 400 !important;
  margin-left: 2rem;
  position: relative;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  @apply text-paragraph;
  &::before{
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);

    left: -3rem;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
  &.active {
    margin-left: 3rem;
    @apply text-white;
    &::before {
      opacity: 1;
      left: -2rem;
    }
  }
  @media (max-width: 768px) {
    margin-left: 1rem;
    &.active {
      margin-left: 2rem;
      &::before {
        opacity: 1;
        left: -2rem;
      }
    }
  }
}

/* Styling for active/inactive list headings */
.list-heading {
  color: #777;
  cursor: pointer;
}

.list-heading.active {
  color: #fff;
  font-weight: 700;
}

/* Improved smooth crossfade transitions */
.crossfade-enter-active,
.crossfade-leave-active {
  transition: opacity 0.35s ease-in-out;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}

.crossfade-enter-from {
  opacity: 0;
}

.crossfade-leave-to {
  opacity: 0;
}

.crossfade-enter-to,
.crossfade-leave-from {
  opacity: 1;
}

/* Required for transitions to work properly */
.image-container,
.content-block {
  position: relative;
  min-height: 200px; /* Adjust based on your content */
}

.middle-column {
  position: relative;
}

.right-column {
  position: relative;
  min-height: 200px; /* Adjust based on your content */
}

</style>