const flattenDeep = arr => Array.isArray(arr)
  ? arr.reduce((a, b) => [...flattenDeep(a), ...flattenDeep(b)], [])
  : [arr]

flattenDeep([1, [[2], [3, [4]], 5]])
// => [1, 2, 3, 4, 5]
