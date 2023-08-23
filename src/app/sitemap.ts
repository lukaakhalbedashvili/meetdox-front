import { categories } from '@/data/categoryItems'
import { API_URL } from '@/utils/consts/consts'

const sitemap = async () => {
  const expertsRes = await fetch(
    `${API_URL}/users/teacher/get-teachers-uids-for-seo`
  )

  const expertsData = await expertsRes.json()

  const expertsUrls = expertsData.data.map((item: string) => {
    return { url: `${API_URL}/expert/${item}`, lastModified: new Date() }
  })

  const categoryUrls = categories.map((item) => {
    return { url: `${API_URL}/category/${item.url}`, lastModified: new Date() }
  })

  const subCategories = categories.map((item) => {
    return item.subCategories.map((subItem) => {
      return {
        url: `${API_URL}/category/${item.url}/${subItem.url}`,
        lastModified: new Date(),
      }
    })
  })

  return [
    { url: API_URL, lastModified: new Date() },
    { url: `${API_URL}/about`, lastModified: new Date() },
    { url: `${API_URL}/become-expert`, lastModified: new Date() },
    ...expertsUrls,
    ...categoryUrls,
    ...subCategories[0],
  ]
}
export default sitemap
