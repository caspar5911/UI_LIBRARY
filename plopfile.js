/** @type {import('plop').NodePlopAPI} */
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a new UI component with Storybook',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Component name (PascalCase)',
                validate(value) {
                    if (!value) return 'Name is required';
                    if (!/^[A-Z][A-Za-z0-9]*$/.test(value)) {
                        return 'Must be PascalCase (e.g. Button, IconButton)';
                    }
                    return true;
                },
            },
        ],

        actions: [
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.tsx',
                templateFile: 'plop-templates/component.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.types.ts',
                templateFile: 'plop-templates/component.types.ts.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.scss',
                templateFile: 'plop-templates/component.scss.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/{{name}}.stories.tsx',
                templateFile: 'plop-templates/component.stories.tsx.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{name}}/index.ts',
                templateFile: 'plop-templates/index.ts.hbs',
            },
        ],
    });
};
