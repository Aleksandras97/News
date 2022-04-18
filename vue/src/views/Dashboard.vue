<template>
  <div>
    <PageComponent title="News">
      <select v-model="filter">
        <option value="">None</option>
        <option v-for="category in categories" :key="category">{{category}}</option>
      </select>
      <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        <FeedItem
          v-for="feed in filteredFeeds"
          :key="feed.id"
          :feed="feed"
        />
      </div>
    </PageComponent>
  </div>

</template>

<script setup>
import { computed, ref } from '@vue/runtime-core';
import PageComponent from '../components/PageComponent.vue';
import FeedItem from '../components/Feed/FeedItem.vue';
import store from '../store';

const filter = ref('');
store.dispatch('getFeeds');

const feeds = computed(() => store.state.feeds.data);
const categories = computed(() => [...new Set(feeds.value.map(feed => feed.category))]);
const filteredFeeds = computed(() => feeds.value.filter((feed) => {
  return feed.category.match(filter.value)
}))

</script>
