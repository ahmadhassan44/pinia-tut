<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" id="delete">delete</i>
      <i class="material-icons" id="favorite">favorite</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
}
</script>
