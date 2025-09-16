import { cloneVNode, Comment, defineComponent, Fragment, mergeProps, type VNode } from 'vue';
const renderSlotFragments = (children?: VNode[]): VNode[] => {
  if (!children) return [];

  return children.flatMap((child) => {
    if (child.type === Fragment) return renderSlotFragments(child.children as VNode[]);

    return [child];
  });
};

export const PrimitiveSlot = defineComponent({
  name: 'PrimitiveSlot',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => {
      if (!slots.default) return null;

      const children = renderSlotFragments(slots.default());

      if (children.length === 0) {
        return null;
      }

      const nonCommentChildIndex = children.findIndex((child) => child.type !== Comment);

      if (nonCommentChildIndex === -1) {
        return children;
      }

      const nonCommentChild = children[nonCommentChildIndex];

      const mergedProps = nonCommentChild.props ? mergeProps(attrs, nonCommentChild.props) : attrs;

      if (attrs.class && nonCommentChild.props?.class) {
        delete nonCommentChild.props.class;
      }

      const cloned = cloneVNode(nonCommentChild, mergedProps);

      for (const prop in mergedProps) {
        if (prop.startsWith('on')) {
          cloned.props ||= {};
          cloned.props[prop] = mergedProps[prop];
        }
      }

      if (children.length === 1) {
        return cloned;
      } else {
        children[nonCommentChildIndex] = cloned;
        return children;
      }
    };
  },
});
