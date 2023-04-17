export const getAgeRange = () => {
  const maxPossibleAge = 100
  const minPossibleAge = 6
  const date = new Date()
  const start = date.getFullYear() - maxPossibleAge
  const end = date.getFullYear() - minPossibleAge
  let years = []
  for (let index = start; index < end; index++) {
    years.push(index)
  }
  return years
}
