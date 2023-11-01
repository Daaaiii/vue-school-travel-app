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
    <RouterView v-slot="{ Component }">
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
</style>