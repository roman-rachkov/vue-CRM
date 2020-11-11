<template>
  <ul class="sidenav app-sidenav" :class="{open: open}">
    <template
        v-for="link in links"
        :key="link.path">
      <template v-if="link.meta.sidebar">
        <li v-if="Object.is(link.path, this.$route.path)" class="active">
          <router-link
              :to="link.path"
              class="waves-effect waves-orange pointer"
          >
            {{ link.meta.title }}
          </router-link>
        </li>
        <li v-else>
          <router-link
              :to="link.path"
              class="waves-effect waves-orange pointer"
          >
            {{ link.meta.title }}
          </router-link>
        </li>
      </template>
    </template>

  </ul>
</template>

<script>

import router from "@/router";

export default {
  props: ['open'],
  name: "Sidebar",
  data: () => ({
    links: router.getRoutes(),

  })
}
</script>

<style scoped>

</style>