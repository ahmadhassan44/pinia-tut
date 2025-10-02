<template>
  <header>
    <img src="./assets/pinia-logo.svg" alt="logo" class="logo" />
    <h1>Pinia Tasks</h1>
  </header>
  <div class="task-list">
    <div v-for="task in taskStore.tasks" :key="task.id">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue'

export default {
  components: {
    TaskDetails,
  },
  setup() {
    const taskStore = useTaskStore()
    return {
      taskStore,
    }
  },
}
</script>
