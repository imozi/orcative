import { tv } from 'tailwind-variants';
import { defineComponent, h, mergeProps, type Component, type HTMLAttributes, type PropType, type Raw } from 'vue';

import { PrimitiveSlot } from './PrimitiveSlot';

const SELF_CLOSING_TAGS = new Set(['area', 'br', 'col', 'embed', 'hr', 'img', 'input', 'source', 'track', 'wbr']);

type HTMLElements =
  // Headings
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

  // Structure & sections
  | 'p'
  | 'address'
  | 'blockquote'
  | 'q'
  | 'div'
  | 'span'
  | 'header'
  | 'footer'
  | 'main'
  | 'section'
  | 'article'
  | 'aside'
  | 'nav'
  | 'search'
  | 'hgroup'

  // Text content
  | 'br'
  | 'wbr'
  | 'hr'
  | 'b'
  | 'i'
  | 's'
  | 'u'
  | 'small'
  | 'strong'
  | 'em'
  | 'mark'
  | 'cite'
  | 'sub'
  | 'sup'
  | 'del'
  | 'ins'
  | 'kbd'
  | 'var'
  | 'dfn'
  | 'samp'
  | 'abbr'
  | 'code'
  | 'pre'
  | 'ruby'
  | 'rt'
  | 'rp'
  | 'rtc'
  | 'bdo'
  | 'bdi'
  | 'time'
  | 'data'
  | 'output'

  // Forms
  | 'form'
  | 'input'
  | 'textarea'
  | 'button'
  | 'select'
  | 'option'
  | 'optgroup'
  | 'datalist'
  | 'label'
  | 'fieldset'
  | 'legend'

  // Media & graphics
  | 'img'
  | 'figure'
  | 'figcaption'
  | 'picture'
  | 'source'
  | 'svg'
  | 'canvas'
  | 'audio'
  | 'video'
  | 'iframe'
  | 'embed'
  | 'object'
  | 'track'

  // Links & maps
  | 'a'
  | 'map'
  | 'area'

  // Lists
  | 'ol'
  | 'ul'
  | 'li'
  | 'dl'
  | 'dt'
  | 'dd'

  // Tables
  | 'table'
  | 'thead'
  | 'tbody'
  | 'tfoot'
  | 'tr'
  | 'th'
  | 'td'
  | 'caption'
  | 'col'
  | 'colgroup'

  // Interactive / semantic
  | 'details'
  | 'summary'
  | 'dialog'
  | 'template'

  // Misc
  | 'meter'
  | 'progress';

type ElementOrComponent = HTMLElements | Component | Raw<Component>;

type PrimitiveProps = {
  asChild?: boolean;
  as?: ElementOrComponent;
};

type PropDefinition = {
  type: unknown;
  default?: unknown;
};

export type ForwardProps<T> = T & PrimitiveProps;
export const useForwardProps = <T extends Record<string, PropDefinition>>(props: T, as: ElementOrComponent = 'div') => {
  return {
    asChild: {
      type: Boolean,
      default: false,
    },
    as: {
      type: [String, Object] as PropType<ElementOrComponent>,
      default: as,
    },
    ...props,
  } as const;
};

const primitiveTv = tv({ base: '' });

export const Primitive = defineComponent({
  name: 'Primitive',
  props: useForwardProps({}),
  setup(props, { attrs, slots }) {
    const asTag = props.asChild ? 'template' : props.as;

    return () => {
      const attrsWithClass = mergeProps(attrs, { class: primitiveTv({ class: attrs.class as HTMLAttributes['class'] }) });

      switch (true) {
        case typeof asTag === 'string' && SELF_CLOSING_TAGS.has(asTag):
          return h(asTag, attrsWithClass);
        case asTag !== 'template':
          return h(props.as, attrsWithClass, { default: slots.default });
        default:
          return h(PrimitiveSlot, attrsWithClass, { default: slots.default });
      }
    };
  },
});
