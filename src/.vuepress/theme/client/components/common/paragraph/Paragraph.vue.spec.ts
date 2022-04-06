import Paragraph from './Paragraph';
import { mount } from '@vue/test-utils';

describe('element: paragraph', () => {
  it('renders without options', () => {
    const component = mount(Paragraph);
    expect(component.element.tagName).toBe('P');
    expect(component.element.className).toMatchInlineSnapshot('"pt-3 pb-2"');
    expect(component.element.innerHTML).toBe('');
  });

  it('can get extra classes', () => {
    const component = mount(Paragraph, { attrs: { class: 'text-lg' } });
    expect(component.element.className).toMatchInlineSnapshot('"pt-3 pb-2 text-lg"');
  });

  it('can have arbitrary attributes', () => {
    const component = mount(Paragraph, { attrs: { role: 'alert' } });
    expect(component.element.className).toMatchInlineSnapshot('"pt-3 pb-2"');
    expect(component.element.getAttribute('role')).toBe('alert');
  });

  it('has a default slot', () => {
    const layout = {
      template: '<Paragraph>This is content</Paragraph>',
      components: { Paragraph },
    };
    const component = mount(layout);
    expect(component.element.textContent).toMatchInlineSnapshot('"This is content"');
  });
});
