module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Generate component scaffolding',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/.vuepress/components/{{ kebabCase name }}/{{ pascalCase name }}.vue',
        templateFile: 'plop-templates/component/Component.hbs',
      },
      {
        type: 'add',
        path: 'src/.vuepress/components/{{ kebabCase name }}/{{ pascalCase name}}.spec.ts',
        templateFile: 'plop-templates/component/Component.spec.hbs',
      },
    ],
  }),
  plop.setGenerator('component:theme', {
    description: 'Generate component scaffolding to replace existing theme',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/.vuepress/components/theme/{{ kebabCase name }}/{{ pascalCase name }}.vue',
        templateFile: 'plop-templates/component/Component.hbs',
      },
      {
        type: 'add',
        path: 'src/.vuepress/components/theme/{{ kebabCase name }}/{{ pascalCase name}}.spec.ts',
        templateFile: 'plop-templates/component/Component.spec.hbs',
      },
      {
        type: 'modify',
        path: 'src/.vuepress/config.ts',
        transform: (template) => {
          console.log(template);

          return template;
        },
      },
    ],
  });
};
