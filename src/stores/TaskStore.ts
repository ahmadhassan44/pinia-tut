import { defineStore, type StoreDefinition } from 'pinia'

export const useTaskStore: StoreDefinition<'taskstore', {}, {}, {}> = defineStore('taskstore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
    ],
    userName: 'Ahmad ',
  }),
})
