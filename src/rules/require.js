const { elementType, hasProp } = require('jsx-ast-utils');
const { getTagsToCheck } = require('../utils');

module.exports = {
    meta: {
        docs: {
            description: 'Check required component props',
        },
        schema: [],
    },
    create(context) {
        const tagsToCheck = getTagsToCheck(context.options || []);

        return {
            JSXOpeningElement: (node) => {
                const tagName = elementType(node);

                if (!tagsToCheck.has(tagName)) return;

                const { props, msg } = tagsToCheck.get(tagName);

                props.forEach((propName) => {
                    if (!hasProp(node.attributes, propName)) {
                        context.report({
                            node,
                            message: msg || `Missing an required ${propName} prop for ${tagName} element`,
                        });
                    }
                });
            },
        };
    },
};
