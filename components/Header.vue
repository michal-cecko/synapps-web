<template>
  <div class="container-wrapper z-20">
    <div class="container mx-auto">
      <header class="flex justify-between items-center py-4 px-8 relative z-50">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>

        <!-- Custom Hamburger Menu Toggle Button with Menu Text -->
        <button
            @click="toggleMenu"
            class="menu-toggle flex items-center gap-3 z-50 focus:outline-none"
            aria-label="Toggle menu"
        >
          <span class="menu-text text-white transition-opacity duration-300 mr-2"
                :class="{ 'opacity-0': isMenuOpen }">Menu</span>
          <div class="hamburger" :class="{ 'active': isMenuOpen }">
            <span class="short top"></span>
            <span class="full middle"></span>
            <span class="short bottom"></span>
          </div>
        </button>

        <!-- Fullscreen Menu Overlay -->
        <div
            class="fullscreen-menu fixed inset-0 bg-background flex flex-col justify-center items-center"
            :class="{ 'active': isMenuOpen }"
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
          <div class="social-icons flex space-x-6 mt-16">
            <a href="https://facebook.com" target="_blank" rel="noopener" class="social-icon">
              <FacebookIcon class="w-6 h-6 fill-current text-white hover:text-primary-yellow transition-colors duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-icon">
              <InstagramIcon class="w-6 h-6 fill-current text-white hover:text-primary-yellow transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-icon">
              <LinkedinIcon class="w-6 h-6 fill-current text-white hover:text-primary-yellow transition-colors duration-300" />
            </a>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FacebookIcon from '~/assets/svg/facebook.svg?component';
import InstagramIcon from '~/assets/svg/instagram.svg?component';
import LinkedinIcon from '~/assets/svg/linkedin.svg?component';
import Logo from '~/assets/svg/logo/logo.svg?component'

const isMenuOpen = ref(false);

// Menu links data
const menuLinks = [
  { text: 'O nás', url: '/o-nas' },
  { text: 'Projekty', url: '/projekty' },
  { text: 'Spolupráca', url: '/spolupraca' },
  { text: 'Kontakt', url: '/kontakt' }
];

// Toggle menu state
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

  // Prevent scrolling when menu is open
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

// Close menu
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
/* Container styling */
.container-wrapper {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: transparent;
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

/* Fullscreen Menu Styles */
.fullscreen-menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s;
  z-index: 40;
}

.fullscreen-menu.active {
  opacity: 1;
  visibility: visible;
}

/* Menu Links Animation */
.menu-link {
  opacity: 0;
  transform: translateY(20px);
}

.fullscreen-menu.active .menu-link {
  animation: fadeInUp 0.6s ease forwards;
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

/* Social Icons Animation */
.social-icons {
  opacity: 0;
  transform: translateY(20px);
}

.fullscreen-menu.active .social-icons {
  animation: fadeInUp 0.6s ease 0.4s forwards;
}

/* Add hover effect for menu items */
.menu-link a:hover {
  color: var(--primary-yellow);
}
</style>