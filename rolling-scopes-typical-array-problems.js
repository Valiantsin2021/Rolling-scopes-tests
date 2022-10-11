
export function min (array) {
  if(!array || array.length === 0) {
    return 0;
  }
  return array.sort((a, b) => a - b)[0]
}

export function max (array) {
  if(!array || array.length === 0) {
    return 0;
  }
  return array.sort((a, b) => b - a)[0]
}
export function avg (array) {
  if(!array || array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b)/array.length
}