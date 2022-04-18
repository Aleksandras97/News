import {createStore} from 'vuex'

const tmpFeeds = [
  {
    id: 100,
    title: 'First feed title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
    category: 'First category',
    created_at: '2022-12-20 10:00:00',
    updated_at: '2022-12-20 10:00:00',
    feedProdider: {
      id: 12,
      name: 'Prodider name 1'
    }
  },
  {
    id: 101,
    title: '2 feed title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
    category: 'Second category',
    created_at: '2022-12-20 10:00:00',
    updated_at: '2022-12-20 10:00:00',
    feedProdider: {
      id: 12,
      name: 'Prodider name 1'
    }
  },
  {
    id: 102,
    title: '3 feed title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
    category: 'First category',
    created_at: '2022-12-20 10:00:00',
    updated_at: '2022-12-20 10:00:00',
    feedProdider: {
      id: 13,
      name: 'Prodider name 2'
    }
  },
  {
    id: 103,
    title: '4 feed title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
    category: 'Second category',
    created_at: '2022-12-20 10:00:00',
    updated_at: '2022-12-20 10:00:00',
    feedProdider: {
      id: 13,
      name: 'Prodider name 2'
    }
  },
]

const tpmFeedProviders = [
  {
    id: 12,
    name: 'FeedProvider 1',
    feeds: [
      {
        id: 103,
        title: '1 feed title',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
        category: 'Second category',
        created_at: '2022-12-20 10:00:00',
        updated_at: '2022-12-20 10:00:00',
      },
      {
        id: 103,
        title: '2 feed title',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
        category: 'Second category',
        created_at: '2022-12-20 10:00:00',
        updated_at: '2022-12-20 10:00:00',
      },
      {
        id: 103,
        title: '3 feed title',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
        category: 'Second category',
        created_at: '2022-12-20 10:00:00',
        updated_at: '2022-12-20 10:00:00',
      }
    ]
  },
  {
    id: 13,
    name: 'FeedProvider 2',
    feeds: [
      {
        id: 103,
        title: '1 feed title',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
        category: 'Second category',
        created_at: '2022-12-20 10:00:00',
        updated_at: '2022-12-20 10:00:00',
      },
      {
        id: 103,
        title: '2 feed title',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
        category: 'Second category',
        created_at: '2022-12-20 10:00:00',
        updated_at: '2022-12-20 10:00:00',
      },
      {
        id: 103,
        title: '3 feed title',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim adipisci similique alias dicta aliquam, asperiores maiores earum itaque inventore nesciunt aliquid suscipit repellendus unde omnis fugiat, delectus cum dolores ipsum?',
        category: 'Second category',
        created_at: '2022-12-20 10:00:00',
        updated_at: '2022-12-20 10:00:00',
      }
    ]
  },
]

const store = createStore({
  state: {
    feeds: [...tmpFeeds],
    feedProviders: [...tpmFeedProviders]
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {}
})

export default store;
