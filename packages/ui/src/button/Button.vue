<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants';
import { useAttrs } from 'vue';

import { Primitive, type PrimitiveProps } from '../primitive';

defineOptions({
  inheritAttrs: false,
});
const attrs = useAttrs();

const buttonTv = tv({
  base: 'transition-color inline-flex cursor-pointer items-center justify-center rounded-md font-medium duration-300 focus:outline-none focus-visible:ring-4 has-[>svg]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    color: {
      neutral: '',
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
      icon: '',
    },
    size: {
      xs: 'px-2 py-1.5 text-xs has-[>svg]:px-2 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-4',
      sm: 'px-2.5 py-1.5 text-sm has-[>svg]:px-2.5 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-5',
      md: 'px-3 py-1.5 text-base has-[>svg]:px-2.5 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-6',
      lg: 'px-3.5 py-1.5 text-lg has-[>svg]:px-3 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-7',
      xl: 'px-4 py-2 text-xl has-[>svg]:px-3 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-8',
      '2xl': 'px-4.5 py-2 text-2xl has-[>svg]:px-3.5 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-9',
      '3xl': 'px-5 py-2 text-3xl has-[>svg]:px-4 has-[>svg]:py-1.5 [&_svg:not([class*="size-"])]:size-10',
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed opacity-50',
    },
    icon: {
      true: 'has-[>svg]:p-1.5',
    },
  },
  compoundVariants: [
    {
      color: 'neutral',
      variant: 'solid',
      class:
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/85 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 bg-[var(--color-neutral,var(--color-neutral-900))] text-white',
    },
    {
      color: 'neutral',
      variant: 'outline',
      class:
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/10 in-hover:hover:ring-[var(--color-neutral,var(--color-neutral-900))]/40 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 ring-[var(--color-neutral,var(--color-neutral-900))]/30 bg-white text-[var(--color-neutral,var(--color-neutral-900))] ring-1',
    },
    {
      color: 'neutral',
      variant: 'soft',
      class:
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/15 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 bg-[var(--color-neutral,var(--color-neutral-900))]/5 text-[var(--color-neutral,var(--color-neutral-900))]',
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class:
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/15 inset-ring-[var(--color-neutral,var(--color-neutral-900))]/50 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 inset-ring-1 bg-[var(--color-neutral,var(--color-neutral-900))]/5 text-[var(--color-neutral,var(--color-neutral-900))]',
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
  icon?: ButtonVariants['icon'];
  disabled?: ButtonVariants['disabled'];
}

const props = defineProps<ButtonProps>();
</script>

<template>
  <Primitive
    :as="props.as ? props.as : 'button'"
    :as-child="props.asChild"
    :class="buttonTv({ variant: props.variant, size: props.size, icon: props.icon, disabled: props.disabled, class: props.class })"
    v-bind="attrs"
  >
    <slot />
  </Primitive>
</template>

<style lang="scss"></style>
