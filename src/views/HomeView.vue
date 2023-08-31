<template>
  <Presentation/>
  <div class="py-12 bg-primary">
    <div class="container grid grid-cols-4 gap-4">
      <div class="facebook">
        <div class="badge badge-neutral">
          <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          Facebook
        </div>
      </div>
      <div class="instagram">
        <div class="badge badge-neutral">Instagram</div>
      </div>
      <div class="linkedin">
        <div class="badge badge-neutral">LinkedIn</div>
      </div>
      <div class="fiverr">
        <div class="badge badge-neutral">Fiverr</div>
      </div>
    </div>
  </div>
  <About/>
</template>

<script>
// @ is an alias to /src

import About from "@/components/Homepage/About_Section.vue";
import Presentation from "@/components/Homepage/Presentation_Section.vue"
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add()
export default {
  name: "HomeView",
  components: {
    FontAwesomeIcon,
    About,
    Presentation,
  }
};
</script>

<style scoped>

</style>
