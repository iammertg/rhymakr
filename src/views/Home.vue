<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'Home',
  components: { HelloWorld },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
}
</style>
