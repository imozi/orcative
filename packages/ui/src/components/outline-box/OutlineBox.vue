<script setup lang="ts">
import { tv } from 'tailwind-variants';
import { useAttrs, type HTMLAttributes } from 'vue';

import { Primitive } from '../primitive';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const placeholderTv = tv({
  base: 'rounded-xs border border-dashed border-[var(--color-border,var(--color-neutral-900))]/20 p-3 dark:border-[var(--color-border,var(--color-neutral-300))]/20',
});
</script>

<template>
  <Primitive
    v-bind="{
      ...attrs,
      class: placeholderTv({ class: attrs.class as HTMLAttributes['class'] }),
    }"
  >
    <slot />
  </Primitive>
</template>

<style lang="scss"></style>
