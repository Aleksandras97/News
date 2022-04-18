<template>
  <PageComponent v-if="feed" title="View Feed">
    <div class="flex-col">
      <div class="flex justify-between">
        <div class="text-left font-bold">Provider: <span class="text-gray-500 underline">{{ feed.feedProdider.name }}</span></div>
        <div class="text-left font-bold">{{ feed.category }}</div>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 py-4">{{ feed.title }}</h1>
      <div v-html="feed.text" class="overflow-hidden flex-1"></div>
    </div>
  </PageComponent>
  <PageComponent v-else title="No such feed" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PageComponent from "../components/PageComponent.vue"

const route = useRoute()
const store = useStore()
let feed = ref({})

if (route.params.id) {
  feed.value = store.state.feeds.find(
    (feed) => feed.id === parseInt(route.params.id)
  );
}

</script>

<style>

</style>
