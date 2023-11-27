
<template>
  <div class="home">
    <h1>All destinations</h1>
    <button @click="addDynamicRoute">Add Dinamyc Route</button>
    <RouterLink to="/dynamic">Visit Dynamic Route</RouterLink>
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

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }, methods: {
    addDynamicRoute() {
      this.$router.addRoute({
        name: 'dynamic',
        path: '/dynamic',
        component: () => import('@/views/LoginPage.vue')
      })
      this.$router.removeRoute('dynamic')
    }
  }
}
</script>