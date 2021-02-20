<template>
  <div class="arpage__container">
    fdsfsfs
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: yellow;'></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </div>
</template>

<script>

    export default {
        name: "ARPage",

    }


</script>

<style scoped>

</style>