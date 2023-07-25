<script setup>
import { ref } from 'vue'

const message = ref('Hello world!')
</script>

<template>
  <div>{{ message }} (Composition API)</div>
</template>
