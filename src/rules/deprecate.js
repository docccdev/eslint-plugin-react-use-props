import { elementType, hasProp } from 'jsx-ast-utils';
import { getTagsToCheck, schema } from '../utils';

export default {
    meta: {
        docs: {
            description: 'Check required component props',
        },
        schema: schema,
    },
    create(context) {
        const tagsToCheck = getTagsToCheck(context.options || []);

        return {
            JSXOpeningElement: (node) => {
                const tagName = elementType(node);

                if (!tagsToCheck.has(tagName)) return;

                const { props, msg } = tagsToCheck.get(tagName);

                props.forEach((propName) => {
                    if (hasProp(node.attributes, propName)) {
                        context.report({
                            node,
                            message: msg || `There is an deprecated prop "${propName}" for "${tagName}" element`,
                        });
                    }
                });
            },
        };
    },
};
