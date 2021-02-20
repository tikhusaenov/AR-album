<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>

</template>

<script>
  import LandingLayout from "./layouts/LandingLayout";
  import WebArPageLayout from "./layouts/WebArPageLayout";


  export default {
      computed: {
          layout() {
              return (this.$route.meta.layout || 'empty') + '-layout'
          }
      },
      components: {
          LandingLayout, WebArPageLayout
      }
  }
</script>


<style>

</style>
