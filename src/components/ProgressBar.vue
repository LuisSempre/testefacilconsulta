<template>
    <div class="progress mt-4">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 50%"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .progress {
      height: 20px;
    }
    .progress-bar {
      background-color: #483698;
    }
</style>