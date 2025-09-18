<script setup lang="ts">
import { Button } from '@orcative/ui';

import { Placeholder } from '../components/placeholder';
</script>

<template>
  <Placeholder />
  <div class="grid justify-items-start gap-2 p-10">
    <Button as="button">Default</Button>
    <Button as="button" variant="outline">Outline</Button>
  </div>
</template>

<style lang="css"></style>
