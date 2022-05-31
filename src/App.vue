<template>
  <div class="d-flex align-items-center justify-content-center bg-cta-0">
    <div class="d-flex bg-white p-5 justify-content-between shadow-lg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "App",
};
</script>
