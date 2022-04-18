<template>

  <PageComponent v-if="feedProdiver" :title="feedProdiver.name" >
    <div class="flex flex-col py-4 px-6 mb-2 shadow-md bg-white hover:bg-gray-50" v-for="feed in feedProdiver.feeds" :key="feed.id">
      <div class="flex justify-between">
        <div class="text-left font-bold">{{ feed.category }}</div>
      </div>
      <h4  class="my-2 text-lg font-bold ">
        <a @click="isModalOpen = true" class="cursor-pointer hover:text-orange-400">{{ feed.title }}</a>
      </h4>
      <div v-html="feed.text" class="overflow-hidden flex-1"></div>
    </div>
  </PageComponent>
  <PageComponent v-else title="No such provider" />

</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PageComponent from "../components/PageComponent.vue"


const route = useRoute()
const store = useStore()
let feedProdiver = ref({})

if (route.params.id) {
  store.dispatch('getFeedProvider', route.params.id);
  feedProdiver = computed(() => store.state.feedProvider.data);
}
</script>

<style>

</style>
