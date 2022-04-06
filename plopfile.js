/* eslint-disable no-template-curly-in-string,max-lines-per-function */
const { path } = require('@vuepress/utils');
const fs = require('fs');
const defaultThemeComponents = fs.readdirSync(path.dirname(require.resolve('@vuepress/theme-default')) + '/../client/components');

module.exports = (plop) => {
  plop.setGenerator('component', {
    alias: 'component:vue',
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
        path: 'src/.vuepress/theme/client/components/{{ kebabCase name }}/{{ pascalCase name }}.vue',
        templateFile: 'plop-templates/component/Component.vue.hbs',
      },
      {
        type: 'add',
        path: 'src/.vuepress/theme/client/components/{{ kebabCase name }}/{{ pascalCase name}}.vue.spec.ts',
        templateFile: 'plop-templates/component/Component.spec.hbs',
      },
    ],
  });

  plop.setGenerator('component:ts', {
    description: 'Generate TypeScript component scaffolding',
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
        path: 'src/.vuepress/theme/client/components/{{ kebabCase name }}/{{ pascalCase name }}.ts',
        templateFile: 'plop-templates/component/Component.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/.vuepress/theme/client/components/{{ kebabCase name }}/{{ pascalCase name}}.vue.spec.ts',
        templateFile: 'plop-templates/component/Component.spec.hbs',
      },
    ],
  });

  plop.setGenerator('component:theme', {
    description: 'Generate component scaffolding to replace component from default theme',
    prompts: [
      {
        type: 'list',
        name: 'name',
        choices: defaultThemeComponents.map((componentName) => {
          return componentName.replace('.vue', '');
        }),
      },
    ],
    actions: [
      {
        path: 'src/.vuepress/theme/index.ts',
        type: 'modify',
        pattern: /(alias:\s*\{)/,
        template: '$1\n    \'@theme/{{pascalCase name}}.vue\': `${components}/{{kebabCase name}}/{{pascalCase name}}.vue`,',
      },
      {
        type: 'add',
        path: 'src/.vuepress/theme/client/components/{{ kebabCase name }}/{{ pascalCase name }}.vue',
        templateFile: 'plop-templates/component/Component.vue.hbs',
      },
      {
        type: 'add',
        path: 'src/.vuepress/theme/client/components/{{ kebabCase name }}/{{ pascalCase name}}.vue.spec.ts',
        templateFile: 'plop-templates/component/Component.spec.hbs',
      },
    ],
  });

  plop.setGenerator('docs:group', {
    description: 'Generate documentation page group',
    prompts: [
      {
        name: 'name',
        type: 'input',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pathCase name}}/readme.md',
        templateFile: 'plop-templates/docs/readme.md.hbs',
      },
    ],
  });

  plop.setGenerator('docs:page', {
    description: 'Generate documentation page',
    prompts: [
      {
        name: 'name',
        type: 'input',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{pathCase name}}/readme.md',
        templateFile: 'plop-templates/docs/readme.md.hbs',
      },
    ],
  });
};
