export const search = (searchParam: string, data: string[]) => {
  const searchParams = searchParam
    .toLocaleLowerCase()
    .split(' ')
    .filter((item: string) => item !== '')

  return data
    .map((item) => item.toLocaleLowerCase())
    .filter((major) => {
      return (
        searchParams.filter((param: string) => major.includes(param)).length > 0
      )
    })
    .slice(0, 5)
}
