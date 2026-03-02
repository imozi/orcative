<script setup lang="ts">
import { Button, OutlineBox, Placeholder } from '@orcative/ui';

const onClick = () => {
  document.documentElement.classList.toggle('dark');
};
</script>

<template>
  <div class="flex flex-col items-baseline justify-center gap-5 p-5">
    <OutlineBox class="flex gap-3">
      <Button color="primary" loading>Solid</Button>
      <Button color="secondary" icon @click="onClick">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 3l0 18"></path>
          <path d="M12 9l4.65 -4.65"></path>
          <path d="M12 14.3l7.37 -7.37"></path>
          <path d="M12 19.6l8.85 -8.85"></path>
        </svg>
      </Button>
      <Button color="primary" variant="outline">Outline</Button>
      <Button color="primary" variant="soft">Soft</Button>
      <Button color="primary" variant="subtle">Subtle</Button>
      <Button color="primary" variant="ghost">Ghost</Button>
      <Button variant="link" as-child>
        <a href="#">Link</a>
      </Button>
    </OutlineBox>
    <OutlineBox class="grid grid-cols-2 gap-3">
      <Placeholder />
      <Placeholder picture />
    </OutlineBox>
  </div>
</template>

<style lang="scss"></style>
