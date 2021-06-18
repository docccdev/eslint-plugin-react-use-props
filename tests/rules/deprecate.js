const { RuleTester } = require('eslint');
const rule = require('../../dist/rules/deprecate');

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
});

ruleTester.run('react-use-props/deprecate', rule, {
    valid: [
        {
            code: '<Box />',
            options: [{ element: 'Box', props: ['box-empty'] }],
        },
        {
            code: '<div />',
            options: [{ element: 'div', props: ['width', 'height'] }],
        },
        {
            code: `
                <>
                    <Box />
                    <div />
                </>
            `,
            options: [
                { element: 'Box', props: ['box-empty'] },
                { element: 'div', props: ['width', 'height'] },
            ],
        },
    ],
    invalid: [
        {
            code: '<Box box-empty="hidden" />',
            options: [{ element: 'Box', props: ['box-empty'] }],
            errors: [
                { message: 'There is an deprecated prop "box-empty" for "Box" element' },
            ],
        },
        {
            code: '<div width="100" height="100" />',
            options: [{ element: 'div', props: ['width', 'height'] }],
            errors: [
                { message: 'There is an deprecated prop "width" for "div" element' },
                { message: 'There is an deprecated prop "height" for "div" element' },
            ],
        },
        {
            code: '<Box box-empty="hidden" />',
            options: [{ element: 'Box', props: ['box-empty'], msg: 'The prop "box-empty" is deprecated' }],
            errors: [
                { message: 'The prop "box-empty" is deprecated' },
            ],
        },
        {
            code: `
                <>
                    <Box box-empty='hidden' />
                    <div width='100' />
                </>
            `,
            options: [
                { element: 'Box', props: ['box-empty'] },
                { element: 'div', props: ['width', 'height'] },
            ],
            errors: [
                { message: 'There is an deprecated prop "box-empty" for "Box" element' },
                { message: 'There is an deprecated prop "width" for "div" element' },
            ],
        },
    ],
});
