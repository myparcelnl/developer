import {VNode, defineComponent, h, onBeforeUpdate, ref} from 'vue';

// eslint-disable-next-line @typescript-eslint/naming-convention
const CodeGroup = defineComponent({
  name: 'CodeGroup',

  // eslint-disable-next-line max-lines-per-function
  setup(props, {slots}) {
    // index of current active item
    const activeIndex = ref(-1);

    // refs of the tab buttons
    const tabRefs = ref<HTMLButtonElement[]>([]);

    if (__VUEPRESS_DEV__) {
      // after removing a code-group-item, we need to clear the ref
      // of the removed item to avoid issues caused by HMR
      onBeforeUpdate(() => {
        tabRefs.value = [];
      });
    }

    // activate next tab
    const activateNext = (i = activeIndex.value): void => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }

      tabRefs.value[activeIndex.value].focus();
    };

    // activate previous tab
    const activatePrevious = (i = activeIndex.value): void => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }

      tabRefs.value[activeIndex.value].focus();
    };

    // handle keyboard event
    const keyboardHandler = (event: KeyboardEvent, i: number): void => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        activatePrevious(i);
      }
    };

    // eslint-disable-next-line max-lines-per-function
    return () => {
      const items = (slots.default?.() ?? []).map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }

        return vnode as VNode & {props: Exclude<VNode['props'], null>};
      });

      if (items.length === 0) {
        return null;
      }

      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === '' || vnode.props.active === true);

        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }

      const nav = h(
        'nav',
        h(
          'ul',
          {
            class: [
              '!p-0',
              'inline-grid',
              'bg-zinc-100',
              'dark:bg-zinc-800',
              'grid-flow-col',
              'auto-cols-max',
              'rounded-tl-lg',
              'rounded-tr-lg',
              'overflow-hidden',
            ],
          },
          items.map((vnode, i) => {
            const isActive = i === activeIndex.value;

            return h(
              'li',
              {
                class: 'list-none',
              },
              h(
                'button',
                {
                  ref: (element) => {
                    if (!element) {
                      return;
                    }

                    tabRefs.value[i] = element as HTMLButtonElement;
                  },
                  class: {
                    'font-mono text-sm px-4 py-1 transition-colors': true,
                    'bg-zinc-50 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500': !isActive,
                  },
                  ariaPressed: isActive,
                  ariaExpanded: isActive,
                  onClick: () => {
                    activeIndex.value = i;
                  },
                  onKeydown: (e: KeyboardEvent) => keyboardHandler(e, i),
                },
                vnode.props.title,
              ),
            );
          }),
        ),
      );

      return h(
        'div',
        {
          class: 'code-group overflow-hidden rounded-lg mt-2',
        },
        [nav, items],
      );
    };
  },
});

export default CodeGroup;
