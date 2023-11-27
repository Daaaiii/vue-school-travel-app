
<template>
  <div class="home">
    <h1>All destinations</h1>
    <button @click="triggerRouteError">Trigger Router Error</button>
    <div class="destinations">
      <RouterLink v-for="destination in destinations" :key="destination.id"
        :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">


        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>

    </div>

  </div>
</template>

<script>


import sourceData from "@/data.json";
import { isNavigationFailure, NavigationFailureType } from "vue-router";

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }, methods: {
    async triggerRouteError() {
      const navigationFailure = await this.$router.push('/')
      if (isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)) {
        console.log(navigationFailure.to)
        console.log(navigationFailure.from)
      } else {
        console.log('All went well')
      }
    }
  }
}
</script>