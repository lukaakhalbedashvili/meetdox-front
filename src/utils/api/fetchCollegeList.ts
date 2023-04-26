import axios from 'axios'

export const fetchCollegeList = (value: string) => {
  return axios
    .get('http://universities.hipolabs.com/search', {
      params: { name: value },
    })
    .then((res) => {
      const dataToSet = res.data.map((item: { name: string }) => {
        return item.name
      })

      return [...new Set<string>(dataToSet)].slice(0, 5)
    })
}
