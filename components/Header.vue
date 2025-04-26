<template>
  <header>
    <!-- Menu Toggle Button moved outside everything to ensure it's always visible -->
    <button
        @click="toggleMenu"
        :class="{ 'scrolled': isScrolled }"
        class="menu-toggle fixed top-[2.3rem] focus:outline-none active:outline-none"
        aria-label="Toggle menu"
    >
      <div class="flex items-center gap-3" data-aos="fade-down">
        <span class="menu-text text-white transition-opacity duration-300 mr-2 font-medium"
            :class="{ 'opacity-0': isMenuOpen }">Menu</span>
        <div class="hamburger" :class="{ 'active': isMenuOpen }">
          <span class="short top"></span>
          <span class="full middle"></span>
          <span class="short bottom"></span>
        </div>
      </div>
    </button>

    <!-- Fullscreen Menu Overlay -->
    <div
        class="fullscreen-menu fixed inset-0 bg-background flex flex-col justify-center items-center"
        :class="{ 'active': isMenuOpen, 'inactive': !isMenuOpen }"
        v-if="menuMounted"
    >
      <nav class="text-center">
        <ul class="space-y-8">
          <li v-for="(link, index) in menuLinks" :key="link.url"
              class="menu-link"
              :style="{ animationDelay: `${0.1 + index * 0.1}s` }">
            <NuxtLink
                :to="link.url"
                @click="closeMenu"
                class="text-3xl md:text-4xl font-medium hover:text-primary-yellow transition-colors duration-300"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Social Icons -->
<!--      <div class="social-icons flex space-x-6 mt-16" data-aos="fade-up" data-aos-delay="400">
        <a href="https://facebook.com" target="_blank" rel="noopener" class="social-icon">
          <FacebookIcon
              class="w-6 h-6 fill-current text-white hover:text-primary-yellow transition-colors duration-300"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener" class="social-icon">
          <InstagramIcon
              class="w-6 h-6 fill-current text-white hover:text-primary-yellow transition-colors duration-300"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-icon">
          <LinkedinIcon
              class="w-6 h-6 fill-current text-white hover:text-primary-yellow transition-colors duration-300"/>
        </a>
      </div>-->
    </div>

    <div class="container-wrapper" :class="{ 'scrolled': isScrolled }">
      <div class="container mx-auto">
        <header class="flex justify-between items-center px-4 px-sm-0 py-4 relative transition-all duration-300">
          <!-- Logo -->
          <NuxtLink to="/" data-aos="fade-down">
            <div class="flex gap-4 items-center mb-6">
              <Logo class="w-sm-[64px] w-[48px] h-auto"/>
              <h5>Synapps</h5>
            </div>
          </NuxtLink>
          <!-- Empty div to maintain the space where the menu button would be -->
          <div class="w-[36px]"></div>
        </header>
      </div>
    </div>
  </header>
</template>

<script setup>
// Script stays the same
import {ref, onMounted, onUnmounted} from 'vue';
import FacebookIcon from '~/assets/svg/facebook.svg?component';
import InstagramIcon from '~/assets/svg/instagram.svg?component';
import LinkedinIcon from '~/assets/svg/linkedin.svg?component';
import Logo from '~/assets/svg/logo/logo.svg?component'

const isMenuOpen = ref(false);
const menuMounted = ref(false);
const isScrolled = ref(false);

// Menu links data
const menuLinks = [
  {text: 'O nás', url: '/#onas'},
  {text: 'Projekty', url: '/projekty'},
  {text: 'Spolupráca', url: '/#spolupraca'},
  {text: 'Kontakt', url: '#kontakt'}
];

// Toggle menu state
const toggleMenu = () => {
  // If menu isn't already mounted, mount it first
  if (!menuMounted.value) {
    menuMounted.value = true;
  }

  isMenuOpen.value = !isMenuOpen.value;

  // Prevent scrolling when menu is open
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};


// Close menu
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Scroll event handler
const handleScroll = () => {
  // Add scrolled class after scrolling 100px
  isScrolled.value = window.scrollY > 100;
};

// Add scroll event listener on mount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Mount the menu after component is mounted
  menuMounted.value = true;
});

// Remove scroll event listener on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Container styling */
.container-wrapper {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
  transition: all 0.3s ease;
  z-index: 20;
}

/* Scrolled state styling with glass effect */
.container-wrapper.scrolled {
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Header padding adjustments when scrolled */
.container-wrapper.scrolled header {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Custom Hamburger Menu Styles with Right-Aligned Bars - 20% larger */
.hamburger {
  position: relative;
  width: 36px; /* Increased by 20% from 30px */
  height: 24px; /* Increased by 20% from 20px */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 2px; /* Maintained bar thickness */
  background-color: white;
  transition: all 0.3s ease;
  margin-left: auto; /* Right align all bars */
  position: absolute;
  right: 0;
}

/* Position bars with absolute positioning for precise control */
.hamburger span.top {
  top: 0;
  width: 75%;
}

.hamburger span.middle {
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

.hamburger span.bottom {
  bottom: 0;
  width: 75%;
}

/* Animation for hamburger to X */
.hamburger.active .top {
  top: 50%;
  width: 100%; /* Expand to full width for X shape */
  transform: translateY(-50%) rotate(45deg); /* Center and rotate */
}

.hamburger.active .middle {
  opacity: 0;
  transform: translateY(-50%) scaleX(0);
}

.hamburger.active .bottom {
  top: 50%;
  width: 100%; /* Expand to full width for X shape */
  transform: translateY(-50%) rotate(-45deg); /* Center and rotate */
}

/* Menu text styling */
.menu-text {
  font-size: 1rem;
}

.fullscreen-menu {
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.93); /* Dark background for the menu */
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  pointer-events: none;
  visibility: visible;
  z-index: 30;
}

.fullscreen-menu.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity 0.5s ease-in, visibility 0.5s ease-in;
}

.fullscreen-menu.inactive {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
  pointer-events: none;
}

/* Your existing styles for .menu-link animations */
.menu-link {
  opacity: 0;
  transform: translateY(20px);
}

.fullscreen-menu.active .menu-link {
  animation: fadeInUp 0.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Menu toggle styles - always on top */
.menu-toggle {
  left: 50%;
  transform: translateX(calc(-50% + 39vw));
  z-index: 100;
  transition: all 0.3s ease;

  &.scrolled {
    top: 1.9rem !important;
  }

  @media (max-width: 768px) {
    left: unset;
    @apply right-8;
    transform: translateX(0);
  }
}

/* Social Icons Animation */
.social-icons {
  opacity: 0;
  transform: translateY(20px);
}

.fullscreen-menu .social-icons {
  animation: fadeInUp 0.6s ease 0.4s forwards;
}

/* Add hover effect for menu items */
.menu-link a:hover {
  color: var(--primary-yellow);
}
</style>