<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants';
import { useAttrs, type HTMLAttributes, type PropType } from 'vue';

import { Primitive, type PrimitiveProps } from '../primitive';

type SpinnerVariants = VariantProps<typeof spinnerTv>;

interface SpinnerProps extends PrimitiveProps {
  size: SpinnerVariants['size'];
}

const spinnerTv = tv({
  base: 'fill-current',
  variants: {
    size: {
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-6',
      lg: 'size-7',
      xl: 'size-8',
      '2xl': 'size-9',
      '3xl': 'size-10',
    },
  },
});
</script>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const props = defineProps({
  asChild: {
    type: Boolean as PropType<SpinnerProps['asChild']>,
    default: false,
  },
  as: {
    type: [String, Object] as PropType<SpinnerProps['as']>,
    default: 'svg',
  },
  size: {
    type: String as PropType<SpinnerProps['size']>,
    default: 'sm',
  },
});
</script>

<template>
  <Primitive
    viewBox="0 0 24 24"
    :as="props.as"
    v-bind="{
      ...attrs,
      class: spinnerTv({ class: attrs.class as HTMLAttributes['class'] }),
    }"
  >
    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.25" />
    <path
      class="origin-center animate-spin"
      d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
    ></path>
    <slot />
  </Primitive>
</template>

<style lang="scss"></style>
