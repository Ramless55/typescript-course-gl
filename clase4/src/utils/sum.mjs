export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Params must be numbers')
  }
  return a + b
}
