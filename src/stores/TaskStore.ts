import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskstore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
    ],
    userName: 'Ahmad ',
  }),
})
