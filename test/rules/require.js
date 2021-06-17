const { RuleTester } = require('eslint');
const rule = require('../../dist/rules/require');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
});

ruleTester.run('react-use-props/require', rule, {
    valid: [
        {
            code: '<img width="100" height="100" alt="" />',
            options: [{ element: 'img', props: ['width', 'height'] }],
        },
        {
            code: `
                <div>
                    <img width="100" height="100" alt="" />
                    <iframe width="100" height="100" />
                </div>
            `,
            options: [
                { element: 'img', props: ['width', 'height'] },
                { element: 'iframe', props: ['width', 'height'] },
            ],
        },
    ],
    invalid: [
        {
            code: '<img alt="" />',
            options: [{ element: 'img', props: ['width', 'height'] }],
            errors: [
                { message: 'Missing an required prop "width" for "img" element' },
                { message: 'Missing an required prop "height" for "img" element' },
            ]
        },
        {
            code: '<img alt="" />',
            options: [{ element: 'img', props: ['width', 'height'], msg: 'Some props "width" or "height" is required' }],
            errors: [
                { message: 'Some props "width" or "height" is required' },
                { message: 'Some props "width" or "height" is required' },
            ],
        },
        {
            code: `
                <div>
                    <img height="100" alt="" />
                    <iframe width="100" />
                </div>
            `,
            options: [
                { element: 'img', props: ['width', 'height'] },
                { element: 'iframe', props: ['width', 'height'] },
            ],
            errors: [
                { message: 'Missing an required prop "width" for "img" element' },
                { message: 'Missing an required prop "height" for "iframe" element' },
            ],
        },
    ],
});
