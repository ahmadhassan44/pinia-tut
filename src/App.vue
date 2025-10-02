<template>
  <header>
    <img src="./assets/pinia-logo.svg" alt="logo" class="logo" />
    <h1>Pinia Tasks</h1>
  </header>
  <nav class="filter">
    <button @click="filter='all'">All Tasks</button>
    <button @click="filter='fav'">Fav Task</button>
  </nav>
  <div class="task-list" v-if="filter==='all'">
    <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
  <div class="task-list" v-if="filter==='fav'">
    <div v-for="task in taskStore.favs" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue'
import { ref } from 'vue';

export default {
  components: {
    TaskDetails,
  },
  setup() {
    const taskStore = useTaskStore()
    const filter=ref('all')
    return {
      taskStore,
      filter
    }
  },
}
</script>
