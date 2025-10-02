<template>
  <header>
    <img src="./assets/pinia-logo.svg" alt="logo" class="logo" />
    <h1>Pinia Tasks</h1>
  </header>
  <div class="task-list">
    <div class="task" v-for="task in taskStore.tasks" :key="task.id">
      <p>{{ task.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from './stores/TaskStore'

export default {
  setup() {
    const taskStore = useTaskStore()
    return {
      taskStore,
    }
  },
}
</script>
