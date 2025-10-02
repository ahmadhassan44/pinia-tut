import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskstore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
    ],
    userName: 'Ahmad ',
  }),
  getters: {
    favs: (state) => {
      return state.tasks.filter((task) => task.isFav)
    },
  }, 
  actions:{
    addTask(task:string){
      console.log('Adding task', task);
      const newTask = {
        id: Math.random(),
        title: task,
        isFav: false
      }
      this.tasks.push(newTask)
    }
  }
})
