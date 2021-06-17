// [
//     { type: 'Image', props: ['width', 'height'] },
//     { type: 'Picture.Item', props: ['width', 'height'] }
// ]

const getTagsToCheck = (options) => {
    const types = new Map();

    options.forEach((option) => {
        types.set(option.type, option);
    });

    return types;
};


module.exports = { getTagsToCheck }
