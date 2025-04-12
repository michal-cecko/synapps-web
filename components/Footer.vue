<template>
  <footer class="pb-8" id="kontakt">
    <div class="container mx-auto flex md:flex-row flex-col justify-between py-8 px-8">
      <div class="column lg:max-w-[400px] max-w-none w-full" data-aos="fade-up">
        <div class="flex gap-4 items-center mb-6">
          <Logo class="w-[64px] h-auto"/>
          <h4>Synapps</h4>
        </div>
        <p class="md:mb-16 mb-8">Neváhajte nás kontaktovať, ak máte záujem o spoluprácu alebo si len chcete pohovoriť.</p>
        <a href="tel:+421 911 266 631" class="block text-[24px] mb-4">+421 911 266 631</a>
        <a href="mailto:studio@synapps.sk" class="block text-[24px]">studio@synapps.sk</a>
      </div>
      <div class="column lg:mt-8 mt-16 flex md:flex-row flex-col md:gap-32 gap-16">
        <div class="links-container" data-aos="fade-up" data-aos-delay="100">
          <h6 class="text-normal md:mb-12 mb-6">Projekty</h6>
          <ul class="flex flex-col gap-2">
            <li><a class="text-paragraph" href="#">Dodoworkout</a></li>
            <li><a class="text-paragraph" href="#">Admin dashboard</a></li>
            <li><a class="text-paragraph" href="#">Street Workout Kysuce</a></li>
            <li><a class="text-paragraph" href="#">3M Barbers</a></li>
          </ul>
        </div>
        <div class="links-container" data-aos="fade-up" data-aos-delay="200">
          <h6 class="text-normal md:mb-12 mb-6">Sledujte nás</h6>
          <ul class="flex flex-col gap-2">
            <li><a class="text-paragraph" href="#">Facebook</a></li>
            <li><a class="text-paragraph" href="#">Instagram</a></li>
            <li><a class="text-paragraph" href="#">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '~/assets/svg/logo/logo.svg?component'
</script>