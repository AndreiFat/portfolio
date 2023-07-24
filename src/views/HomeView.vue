<template>

  <!-- Site Section with Background -->
  <section class="relative bg-gray-400 p-8 presentation-section -z-50 h-full bg-cover bg-no-repeat">
    <div class="container grid justify-items-center items-center">
      <div class="grid grid-cols-1 w-3/4 m-0">
        <div class="py-32 md:py-50 md:pt-60">
          <p class="text-xl sm:text-3xl md:text-6xl font-bold">Lorem ipsum dolor sit amet.</p>
          <p class="text-xs sm:text-xl md:text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur
            cupiditate
            dolorum esse ipsa maiores minima minus porro ratione, rerum unde.</p>
          <button class="btn btn-primary mt-3">See My Works</button>
        </div>
      </div>
    </div>
  </section>
  <Homepage/>
</template>

<script>
// @ is an alias to /src

import Homepage from "@/components/Homepage.vue";

export default {
  name: "HomeView",
  components: {
    Homepage,
  }
};
</script>

<style scoped>
/* Set the height of the navbar as per your design */


/* Position the background image behind the transparent navbar */
.presentation-section:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/images/homepage_macbook.jpg") !important;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -50;
}

.presentation-section:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.52); /* Adjust the alpha value (0.5) to control the darkness */
  z-index: -1;
}
</style>
