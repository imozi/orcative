<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants';
import { useAttrs } from 'vue';

import { Primitive, type PrimitiveProps } from '../primitive';

defineOptions({
  inheritAttrs: false,
});
const attrs = useAttrs();

const buttonTv = tv({
  base: 'transition-color inline-flex cursor-pointer items-center rounded-md font-medium outline-2 duration-300 focus-visible:outline-red-500',
  variants: {
    color: {
      neutral: 'bg-[var(--color-neutral,var(--color-neutral-900))]',
      primary: 'bg-[var(--color-primary,var(--color-blue-600))]',
      secondary: '',
      success: '',
      info: '',
      warning: '',
      error: '',
    },
    variant: {
      solid: '',
      outline: '',
      soft: '',
      subtle: '',
      ghost: '',
    },
    size: {
      xs: 'px-2 py-1',
      sm: 'px-2.5 py-1.5',
      md: '',
      lg: '',
      xl: '',
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed opacity-50',
    },
  },
  compoundVariants: [
    {
      color: 'neutral',
      variant: 'solid',
      class: 'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/90 text-white',
    },
    {
      color: 'neutral',
      variant: 'outline',
      class:
        'bg-white text-[var(--color-neutral,var(--color-neutral-900))] outline-none ring-1 ring-inset ring-[var(--color-neutral,var(--color-neutral-900))]',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'neutral',
    size: 'sm',
  },
});

type ButtonVariants = VariantProps<typeof buttonTv>;

interface ButtonProps extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  disabled?: ButtonVariants['disabled'];
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <Primitive
    :as="props.as ? props.as : 'button'"
    :as-child="props.asChild"
    :class="buttonTv({ variant: props.variant, size: props.size, disabled: props.disabled, class: props.class })"
    v-bind="attrs"
  >
    <slot />
  </Primitive>
</template>

<style lang="scss"></style>
