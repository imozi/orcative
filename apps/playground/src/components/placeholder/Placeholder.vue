<script setup lang="ts">
import { Placeholder } from '@orcative/ui';
</script>

<template>
  <div class="flex gap-5 p-5">
    <div class="bg-white p-5">
      <Placeholder class="h-48 w-48" />
    </div>
    <div class="bg-white p-5">
      <Placeholder as="button" picture />
    </div>
  </div>
</template>

<style lang="css"></style>
