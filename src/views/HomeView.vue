<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <button class="btn btn-primary mt-5">Button</button>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Homepage.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld
  }
};
</script>
