<template>
  <div class="progress mb-2 active">
    <div
      class="progress-bar progress-bar-striped bg-site progress-bar-animated"
      role="progressbar"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
      data-width="100%"
      style="width: 100%"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.progress {
  height: 30px;
}

.bg-site {
  background-color: #de5e60;
}
</style>
