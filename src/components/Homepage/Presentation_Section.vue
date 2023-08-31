<script>
export default {
  name: "Presentation"
};
</script>

<template>
  <div class="p-8 relative">
    <div class="container grid justify-items-center items-center behind-gradient ">
      <div class="grid grid-cols-1 md:w-3/4 m-0 presentation-section">
        <div class="py-24 md:py-40 md:pt-52">
          <p class="text-xl sm:text-3xl md:text-7xl font-bold">Lorem ipsum dolor sit amet.</p>
          <p class="text-xs sm:text-xl md:text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur
            cupiditate
            dolorum esse ipsa.</p>
          <router-link class="btn btn-primary mt-5" to="/portfolio">See my portfolio</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.behind-gradient:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to left, #000000, #060605) !important;
  z-index: -50;
}

/* Position the background image behind the transparent navbar */
.presentation-section:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100% !important;
  background-image: url("/src/assets/images/profile_image.jpeg") !important;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  z-index: -50;
}

.presentation-section:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, rgb(0, 0, 0, 1), rgba(8, 8, 8, 0.7), rgb(0, 0, 0)); /* Adjust the alpha value (0.5) to control the darkness */
  z-index: -1;
}
</style>