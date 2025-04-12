import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.hook('app:mounted', () => {
            AOS.init({
                duration: 800, // Duration of animation (milliseconds)
                easing: 'ease-in-out', // Default easing for AOS animations
                once: true, // Whether animation should happen only once - when you scroll down
                offset: 20, // Offset (in px) from the original trigger point
                delay: 0, // Values from 0 to 3000, with step 50ms
                anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
            });
        });
    }
});