<template>
  <form @submit.prevent="handleSubmit">
    <input 
      type="text" 
      placeholder="I need to..."
      v-model="newTask"
    >
    <button>Add</button>
  </form>
</template>

<script lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

    export default {
        setup() {
            const taskStore=useTaskStore();
            const newTask = ref('');
            const handleSubmit = () => {
                if (newTask.value.trim() === '') return;
                taskStore.addTask(newTask.value);
                newTask.value = '';
            };
            return {
                newTask,
                handleSubmit
            }
            
        }
    }
</script>