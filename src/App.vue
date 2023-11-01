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
    <RouterView :key="$route.path"></RouterView>
  </div>
</template>

