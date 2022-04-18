<template>
<div>
  <div class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[130px]">
    <div class="flex justify-between">
      <div class="text-left font-bold">Provider:
        <span class="text-gray-500 underline">
          <router-link
            :to="{ name: 'FeedProviderView', params: { id: props.feed.feedProvider.id }}"
            class="cursor-pointer hover:text-orange-400"
          >
            {{ props.feed.feedProvider.name }}
          </router-link>
        </span>
      </div>
      <div class="text-left font-bold">{{ props.feed.category }}</div>
    </div>
    <h4  class="my-2 text-lg font-bold ">
      <a @click="isModalOpen = true" class="cursor-pointer hover:text-orange-400">{{ props.feed.title }}</a>
    </h4>
    <div v-html="props.feed.text" class="overflow-hidden flex-1"></div>
  </div>

  <Modal v-if="isModalOpen" @close-modal="isModalOpen = false" >
    <template #title>
      <div class="flex justify-between">
        <div class="text-left font-bold">Provider: <span class="text-gray-500 underline">{{ props.feed.feedProvider.name }}</span></div>
        <div class="text-left font-bold">{{ props.feed.category }}</div>
      </div>
    </template>

    <template #body>
      <h4 class="my-2 text-lg font-bold">{{ props.feed.title }}</h4>
      <div class="overflow-hidden flex-1">{{ props.feed.text }}</div>
      <div class="flex justify-between items-center mt-3">
          <router-link
            :to="{ name: 'FeedView', params: { id: props.feed.id}}"
            class="flex items-center justify-around font-bold py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>View</p>
          </router-link>
          <button
            @click="isModalOpen = false"
            class="flex items-center font-bold py-2 px-4 border border-transparent text-sm rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>
      </div>
    </template>
  </Modal>
</div>

</template>

<script setup>
import { ref } from 'vue';
import Modal from '../Modal.vue';

const props = defineProps({
  feed: Object
})

const isModalOpen = ref(false)

</script>

<style>

</style>
