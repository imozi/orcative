---
prev: false
next: false

---

# What is Orcative?

<script setup lang="ts">
  import { ref } from 'vue'
  import { Placeholder } from '@orcative/ui'

  const picture  = ref(true)
</script>


<button type="button" @click="() => picture = !picture">picture: {{picture}}</button>
<Placeholder :picture="picture"  class="h-80" />

<style lang="scss"></style>


## How use

```vue

<script setup lang="ts">
  import { Placeholder } from '@orcative/ui'
</script>

<template>
  <Placeholder picture  />
</template>

<style lang="css"></style>

```
