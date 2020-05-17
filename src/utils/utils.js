export const spreadArray = (array) => {
    return array.reduce((init, cur) => init.concat(Array.isArray(cur) ? flatten(cur) : cur), [])
}