<template>
  <div class="about_section">
    <div class="container justify-items-center py-16">
      <p class="text-4xl font-bold about inline-block mb-4">About Me</p>
      <div class="grid grid-cols-1 pt-8 w-auto md:grid-cols-2 md:w-3/4 xl:w-1/2 gap-x-4 xl:gap-x-8 mx-auto">
        <div class="flex justify-center">
          <div class="card w-auto glass ms-3 me-3 xl:ms-0">
            <div class="card-body">
              <h2 class="card-title">Short Description</h2>
              <p class="text-start"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam autem
                ducimus, eius est illum
                inventore libero maiores, nihil odit omnis provident quod quos ullam.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="card w-auto glass ms-3 me-3 mt-3 xl:ms-0">
            <div class="card-body">
              <h2 class="card-title">Skills</h2>
              <p class="text-start"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam autem
                ducimus, eius est illum
                inventore libero maiores, nihil odit omnis provident quod quos ullam.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      showButton: true
    };
  },
  methods: {
    toggleButton() {
      this.showButton = !this.showButton;
    }
  }
};
</script>

<style scoped>

.about_section {
  height: 100%;
  background: url('/src/assets/images/blur_about_section.svg') no-repeat;
  background-size: cover;
}

.about {
  position: relative;

}

.about::before {
  content: "";
  position: absolute;
  right: 8%;
  top: 50%;
  bottom: 0;
  width: 100%;
  height: 20px;
  transform: skewX(-8deg);
  background: #1fb2a6;
  z-index: -1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>