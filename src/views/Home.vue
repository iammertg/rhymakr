<template>
  <div class="home">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard';
export default {
  name: 'Home',
  components: { Dashboard },
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100vh;
}
</style>
