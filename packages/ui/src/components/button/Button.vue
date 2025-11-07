<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants';
import { useAttrs, type HTMLAttributes, type PropType } from 'vue';

import { Primitive, type PrimitiveProps } from '../primitive';

type ButtonVariants = VariantProps<typeof buttonTv>;

interface ButtonProps extends PrimitiveProps {
  variant: ButtonVariants['variant'];
  color: ButtonVariants['color'];
  size: ButtonVariants['size'];
  icon: ButtonVariants['icon'];
  disabled: ButtonVariants['disabled'];
  loading: ButtonVariants['loading'];
}

const buttonTv = tv({
  base: 'transition-color inline-flex cursor-pointer items-center justify-center rounded-md font-medium duration-300 focus:outline-none focus-visible:ring-4 has-[>svg]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  variants: {
    color: {
      neutral: '',
      primary: '',
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
      true: 'pointer-events-none cursor-not-allowed opacity-70',
    },
    loading: {
      true: 'pointer-events-none cursor-wait',
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
    // {
    //   color: 'neutral',
    //   variant: 'outline',
    //   class:
    //     'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/10 in-hover:hover:ring-[var(--color-neutral,var(--color-neutral-900))]/40 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 ring-[var(--color-neutral,var(--color-neutral-900))]/30 bg-white text-[var(--color-neutral,var(--color-neutral-900))] ring-1',
    // },
    // {
    //   color: 'neutral',
    //   variant: 'soft',
    //   class:
    //     'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/15 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 bg-[var(--color-neutral,var(--color-neutral-900))]/5 text-[var(--color-neutral,var(--color-neutral-900))]',
    // },
    // {
    //   color: 'neutral',
    //   variant: 'subtle',
    //   class:
    //     'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/15 inset-ring-[var(--color-neutral,var(--color-neutral-900))]/50 focus-visible:ring-[var(--color-neutral,var(--color-neutral-900))]/30 inset-ring-1 bg-[var(--color-neutral,var(--color-neutral-900))]/5 text-[var(--color-neutral,var(--color-neutral-900))]',
    // },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'neutral',
    size: 'sm',
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
    type: Boolean as PropType<ButtonProps['asChild']>,
    default: false,
  },
  as: {
    type: [String, Object] as PropType<ButtonProps['as']>,
    default: 'button',
  },
  variant: {
    type: String as PropType<ButtonVariants['variant']>,
    default: 'solid',
  },
  size: {
    type: String as PropType<ButtonVariants['size']>,
    default: 'sm',
  },
  icon: {
    type: Boolean as PropType<ButtonVariants['icon']>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<ButtonVariants['disabled']>,
    default: false,
  },
  loading: {
    type: Boolean as PropType<ButtonVariants['loading']>,
    default: false,
  },
});
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :aria-disabled="props.disabled || props.loading"
    v-bind="{
      ...attrs,
      class: buttonTv({
        variant: props.variant,
        size: props.size,
        icon: props.icon,
        disabled: props.disabled,
        loading: props.loading,
        class: attrs.class as HTMLAttributes['class'],
      }),
    }"
  >
    <template v-if="props.loading">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.25" />
        <path
          class="origin-center animate-spin"
          d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
        ></path>
      </svg>
    </template>
    <slot />
  </Primitive>
</template>

<style lang="scss"></style>
