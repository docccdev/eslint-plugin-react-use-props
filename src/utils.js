export const getTagsToCheck = (options) => {
    const types = new Map();

    options.forEach((option) => {
        types.set(option.type, option);
    });

    return types;
};
