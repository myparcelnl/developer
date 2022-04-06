import { FunctionalComponent, h } from 'vue';

interface SimpleSlotComponentProps {
  element: string
}

export const SimpleSlotComponent: FunctionalComponent<SimpleSlotComponentProps> = (props, ctx) => {
  return h(
    props.element,
    ctx.attrs,
    {
      default: () => null,
    },
  );
};

SimpleSlotComponent.props = {
  element: {
    type: String,
    default: () => 'div',
  },
};
