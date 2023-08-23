import { categories } from '@/data/categoryItems'
import { API_URL } from '@/utils/consts/consts'

const sitemap = async () => {
  const baseUrl = 'https://www.meetdox.com/'

  const expertsRes = await fetch(
    `${API_URL}/users/teacher/get-teachers-uids-for-seo`
  )

  const expertsData = await expertsRes.json()

  const expertsUrls = expertsData.data.map((item: string) => {
    return { url: `${baseUrl}/expert/${item}`, lastModified: new Date() }
  })

  const categoryUrls = categories.map((item) => {
    return { url: `${baseUrl}/category/${item.url}`, lastModified: new Date() }
  })

  const subCategories = categories.map((item) => {
    return item.subCategories.map((subItem) => {
      return {
        url: `${baseUrl}/category/${item.url}/${subItem.url}`,
        lastModified: new Date(),
      }
    })
  })

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/become-expert`, lastModified: new Date() },
    ...expertsUrls,
    ...categoryUrls,
    ...subCategories[0],
  ]
}
export default sitemap
