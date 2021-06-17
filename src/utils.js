const schema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            element: {
                type: 'string',
            },
            props: {
                type: 'array',
                items: {
                    type: 'string',
                },
                uniqueItems: true,
                minItems: 1,
            },
            msg: {
                type: 'string',
            },
        },
        required: ['element', 'props'],
    },
    uniqueItems: true,
    minItems: 1,
};

const getTagsToCheck = (options) => {
    const types = new Map();

    options.forEach((option) => {
        types.set(option.element, option);
    });

    return types;
};

export default { getTagsToCheck, schema };
