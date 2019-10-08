const types = {
    object: "object",
    boolean: "boolean",
    string: "string",
    number: "number",
    undefined: "undefined",
    null: "null"
};

function deepCopy(object) {
    switch (typeof object) {
        case types.boolean:
        case types.string:
        case types.number:
        case types.undefined:
            return object;
        case types.object: {
            if (!object) {
                return null
            } else if (object instanceof Array) {
                return object.map(deepCopy);
            } else if (object instanceof Object) {
                return Object.keys(object).reduce((acc, k) => {
                    acc[k] = deepCopy(object[k]);
                    return acc
                }, {});
            }
        }
        default:
            throw new Error('Unexpected type')
    }
}

module.exports = deepCopy;
