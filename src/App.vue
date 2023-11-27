<script setup>
import { RouterView } from 'vue-router';
import TheNavegation from './components/TheNavegation.vue';
</script>

<script>
export default {
  components: { TheNavegation }
}

</script>

<template>
  <TheNavegation></TheNavegation>

  <div class="container">

    <!-- Sidebar -->
    <RouterView class="view left-side" v-slot="{ Component }" name="LeftSidebar">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </RouterView>

    <!-- Main -->
    <RouterView v-slot="{ Component }" class="main-view">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>


    </RouterView>
  </div>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}
</style>