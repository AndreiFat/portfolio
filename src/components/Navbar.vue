<template>
  <div class="fixed w-full">
    <div class="navbar container">
      <div class="navbar-start">
        <div class="dropdown">
          <label class="btn btn-ghost lg:hidden" tabindex="0">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h8m-8 6h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </label>
          <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/assets">Assets</router-link>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">LOGO</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/assets">Assets</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn btn-ghost">Social Media Aici</a>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>

</style>