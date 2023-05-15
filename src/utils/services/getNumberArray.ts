interface GetNumberArrayProps {
  start?: number
  end?: number
}

const date = new Date()

export const getNumberArray = ({
  start = 1970,
  end = date.getFullYear(),
}: GetNumberArrayProps) => {
  let years = []

  for (let index = start; index < end; index++) {
    years.push(index)
  }

  return years
}
