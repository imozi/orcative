<script lang="ts">
import { tv, type VariantProps } from 'tailwind-variants';
import { useAttrs, type HTMLAttributes, type PropType } from 'vue';

import { Primitive, type PrimitiveProps } from '../primitive';
import { Spinner } from '../spinner';

type ButtonVariants = VariantProps<typeof buttonTv>;

interface ButtonProps extends PrimitiveProps {
  variant: ButtonVariants['variant'];
  color: ButtonVariants['color'];
  size: ButtonVariants['size'];
  icon: ButtonVariants['icon'];
  disabled: ButtonVariants['disabled'];
  loading: ButtonVariants['loading'];
}

const colorTokens = [
  {
    base: 'primary',
    fallback: 'blue',
  },
  {
    base: 'secondary',
    fallback: 'zinc',
  },
  {
    base: 'success',
    fallback: 'green',
  },
  {
    base: 'info',
    fallback: 'sky',
  },
  {
    base: 'warning',
    fallback: 'orange',
  },
  {
    base: 'error',
    fallback: 'red',
  },
];

const generateColorVariants = () => {
  const schema = colorTokens.reduce(
    (acc, { base, fallback }) => {
      const solid = {
        color: base,
        variant: 'solid',
        class:
          `text-background dark:text-foreground bg-[var(--color-${base},var(--color-${fallback}-700))] ` +
          `focus-visible:outline-[var(--color-${base},var(--color-${fallback}-700))]/30 ` +
          `dark:focus-visible:outline-[var(--color-${base},var(--color-${fallback}-100))]/30 ` +
          `in-hover:hover:bg-[var(--color-${base},var(--color-${fallback}-700))]/90 ` +
          `dark:in-hover:hover:bg-[var(--color-${base},var(--color-${fallback}-700))]/85 `,
      };

      const outline = {
        color: base,
        variant: 'outline',
        class:
          `bg-transparent text-[var(--color-${base},var(--color-${fallback}-700))] ` +
          `dark:text-[var(--color-${base}-foreground,var(--color-${fallback}-600))] ` +
          `ring-1 ring-[var(--color-${base},var(--color-${fallback}-700))]/30 ring-inset ` +
          `dark:ring-[var(--color-${base}-foreground,var(--color-${fallback}-600))]/25 ` +
          `focus-visible:outline-[var(--color-${base},var(--color-${fallback}-700))]/30 ` +
          `dark:focus-visible:outline-[var(--color-${base}-foreground,var(--color-${fallback}-100))]/30 ` +
          `in-hover:hover:bg-[var(--color-${base},var(--color-${fallback}-800))]/8 ` +
          `dark:in-hover:hover:bg-[var(--color-${base}-foreground,var(--color-${fallback}-700))]/8 `,
      };

      const soft = {
        color: base,
        variant: 'soft',
        class:
          `text-[var(--color-${base},var(--color-${fallback}-700))] ` +
          `dark:text-[var(--color-${base}-foreground,var(--color-${fallback}-600))] ` +
          `bg-[var(--color-${base},var(--color-${fallback}-700))]/10 ` +
          `dark:bg-[var(--color-${base}-foreground,var(--color-${fallback}-600))]/10 ` +
          `focus-visible:outline-[var(--color-${base},var(--color-${fallback}-700))]/30 ` +
          `dark:focus-visible:outline-[var(--color-${base}-foreground,var(--color-${fallback}-100))]/30 ` +
          `in-hover:hover:bg-[var(--color-${base},var(--color-${fallback}-800))]/15 ` +
          `dark:in-hover:hover:bg-[var(--color-${base}-foreground,var(--color-${fallback}-600))]/15 `,
      };

      const subtle = {
        color: base,
        variant: 'subtle',
        class:
          `text-[var(--color-${base},var(--color-${fallback}-700))] ` +
          `dark:text-[var(--color-${base}-foreground,var(--color-${fallback}-600))] ` +
          `ring-1 ring-[var(--color-${base},var(--color-${fallback}-700))]/30 ring-inset ` +
          `dark:ring-[var(--color-${base}-foreground,var(--color-${fallback}-600))]/25 ` +
          `bg-[var(--color-${base},var(--color-${fallback}-700))]/10 ` +
          `dark:bg-[var(--color-${base}-foreground,var(--color-${fallback}-600))]/10 ` +
          `focus-visible:outline-[var(--color-${base},var(--color-${fallback}-700))]/30 ` +
          `dark:focus-visible:outline-[var(--color-${base}-foreground,var(--color-${fallback}-100))]/30 ` +
          `in-hover:hover:bg-[var(--color-${base},var(--color-${fallback}-800))]/15 ` +
          `dark:in-hover:hover:bg-[var(--color-${base}-foreground,var(--color-${fallback}-600))]/15 `,
      };

      const ghost = {
        color: base,
        variant: 'ghost',
        class:
          `bg-transparent text-[var(--color-${base},var(--color-${fallback}-700))] ` +
          `dark:text-[var(--color-${base}-foreground,var(--color-${fallback}-600))] ` +
          `focus-visible:outline-[var(--color-${base},var(--color-${fallback}-700))]/30 ` +
          `dark:focus-visible:outline-[var(--color-${base}-foreground,var(--color-${fallback}-100))]/30 ` +
          `in-hover:hover:bg-[var(--color-${base},var(--color-${fallback}-800))]/10 ` +
          `dark:in-hover:hover:bg-[var(--color-${base}-foreground,var(--color-${fallback}-700))]/10 `,
      };

      acc.push(solid, outline, soft, subtle, ghost);

      return acc;
    },
    [] as { [key: string]: string }[],
  );

  const neutral = [
    {
      color: 'neutral',
      variant: 'solid',
      class:
        'text-background bg-[var(--color-neutral,var(--color-neutral-900))] ' +
        'dark:bg-[var(--color-neutral-foreground,var(--color-neutral-50))] ' +
        'focus-visible:outline-[var(--color-neutral,var(--color-neutral-900))]/30 ' +
        'dark:focus-visible:outline-[var(--color-neutral-foreground,var(--color-neutral-100))]/30 ' +
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/85 ' +
        'dark:in-hover:hover:bg-[var(--color-neutral-foreground,var(--color-neutral-100))]/85',
    },
    {
      color: 'neutral',
      variant: 'outline',
      class:
        'text-foreground bg-transparent ' +
        'ring-1 ring-[var(--color-neutral,var(--color-neutral-900))]/30 ring-inset ' +
        'dark:ring-[var(--color-neutral-foreground,var(--color-neutral-100))]/25 ' +
        'focus-visible:outline-[var(--color-neutral,var(--color-neutral-900))]/30 ' +
        'dark:focus-visible:outline-[var(--color-neutral-foreground,var(--color-neutral-100))]/30 ' +
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-900))]/6 ' +
        'dark:in-hover:hover:bg-[var(--color-neutral-foreground,var(--color-neutral-100))]/8',
    },
    {
      color: 'neutral',
      variant: 'soft',
      class:
        'text-foreground ' +
        'dark:text-[var(--color-neutral-foreground,var(--color-neutral-100))] ' +
        'bg-[var(--color-neutral,var(--color-neutral-950))]/5 ' +
        'dark:bg-[var(--color-neutral,var(--color-neutral-800))]/95 ' +
        'focus-visible:outline-[var(--color-neutral,var(--color-neutral-900))]/30 ' +
        'dark:focus-visible:outline-[var(--color-neutral-foreground,var(--color-neutral-100))]/30 ' +
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-800))]/10 ' +
        'dark:in-hover:hover:bg-[var(--color-neutral-foreground,var(--color-neutral-100))]/15',
    },
    {
      color: 'neutral',
      variant: 'subtle',
      class:
        'text-foreground ' +
        'dark:text-[var(--color-neutral-foreground,var(--color-neutral-100))] ' +
        'ring-1 ring-[var(--color-neutral,var(--color-neutral-900))]/30 ring-inset ' +
        'dark:ring-[var(--color-neutral-foreground,var(--color-neutral-100))]/25 ' +
        'bg-[var(--color-neutral,var(--color-neutral-950))]/7 ' +
        'dark:bg-[var(--color-neutral,var(--color-neutral-800))]/95 ' +
        'focus-visible:outline-[var(--color-neutral,var(--color-neutral-900))]/30 ' +
        'dark:focus-visible:outline-[var(--color-neutral-foreground,var(--color-neutral-100))]/30 ' +
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-800))]/15 ' +
        'dark:in-hover:hover:bg-[var(--color-neutral-foreground,var(--color-neutral-100))]/15',
    },
    {
      color: 'neutral',
      variant: 'ghost',
      class:
        'text-foreground bg-transparent ' +
        'dark:text-[var(--color-neutral-foreground,var(--color-neutral-100))] ' +
        'focus-visible:outline-[var(--color-neutral,var(--color-neutral-900))]/30 ' +
        'dark:focus-visible:outline-[var(--color-neutral-foreground,var(--color-neutral-100))]/30 ' +
        'in-hover:hover:bg-[var(--color-neutral,var(--color-neutral-800))]/7 ' +
        'dark:in-hover:hover:bg-[var(--color-neutral-foreground,var(--color-neutral-100))]/10',
    },
  ];

  const link = {
    variant: 'link',
    class:
      `text-[var(--color-link,var(--color-blue-500))] p-0 underline-offset-4 ` +
      `focus-visible:outline-none focus-visible:underline in-hover:hover:text-[var(--color-link-foreground,var(--color-blue-600))] ` +
      `in-hover:hover:underline`,
  };

  schema.unshift(...neutral);
  schema.push(link);

  return schema;
};

const buttonTv = tv({
  base:
    'inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-all ' +
    'duration-(--duration-default) ease-(--transition-easing) focus-visible:outline-4 active:translate-y-0.5 ' +
    'bg- has-[>svg]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
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
      link: '',
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
      true: 'pointer-events-none cursor-wait opacity-80',
    },
    icon: {
      true: 'has-[>svg]:p-1.5',
    },
  },
  compoundVariants: generateColorVariants(),
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
  color: {
    type: String as PropType<ButtonVariants['color']>,
    default: 'neutral',
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
        color: props.color,
        icon: props.icon,
        disabled: props.disabled,
        loading: props.loading,
        class: attrs.class as HTMLAttributes['class'],
      }),
    }"
  >
    <template v-if="props.loading">
      <Spinner />
    </template>
    <slot />
  </Primitive>
</template>

<style lang="scss"></style>
