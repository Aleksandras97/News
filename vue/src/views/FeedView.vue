<template>
  <PageComponent v-if="feed" :title="feed.title">
    <div class="flex-col">
      <div class="flex justify-between">
        <div class="text-left font-bold">Provider: <span class="text-gray-500 underline">{{ feed.feedProvider.name }}</span></div>
        <div class="text-left font-bold">{{ feed.category }}</div>
      </div>
      <!-- <h1 class="text-3xl font-bold text-gray-900 py-4">{{ feed.title }}</h1> -->
      <div v-html="feed.text" class="overflow-hidden text-left p-5 bg-slate-600 rounded text-white"></div>
    </div>
  </PageComponent>
  <PageComponent v-else title="No such feed" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PageComponent from "../components/PageComponent.vue"

const route = useRoute()
const store = useStore()
let feed = ref({})


if (route.params.id) {
  store.dispatch('getFeeds');

  feed = computed(() =>
    store.state.feeds.data.find(
      (feed) => feed.id === parseInt(route.params.id)
    )
  );
}

</script>

<style>

</style>
