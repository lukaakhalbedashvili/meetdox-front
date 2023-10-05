import { categories } from '@/data/categoryItems'
import { API_URL } from '@/utils/consts/consts'

const sitemap = async () => {
  const baseUrl = 'https://www.meetdox.com/'
  const staticPages = [
    {
      url: baseUrl,
      title: 'Meetdox - Your Expertise Hub',
      description:
        'Your Personalized Expertise Hub. Explore tailored expertise and guidance from verified experts across diverse fields. Schedule one-on-one online consultations, gain valuable insights, and accelerate your learning journey. Elevate your skills, career, and aspirations with Meetdox.',
      image: 'https://www.meetdox.com/oct.jpg',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}about`,
      title: 'About Meetdox',
      image: 'https://www.meetdox.com/oct.jpg',
      description:
        'Meetdox is a platform that connects experts and learners. We believe that everyone has something to learn and something to teach. Meetdox is a place where you can find the right expert for your needs and schedule a meeting with them.',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}become-expert`,
      title: 'Become an Expert on Meetdox',
      description: 'Join Meetdox as an expert and start earning today!',
      lastModified: new Date(),
    },
  ]
  const expertsRes = await fetch(
    `${API_URL}/users/teacher/get-teachers-uids-for-seo`
  )
  const expertsDataJson = await expertsRes.json()
  const expertsData = expertsDataJson.data

  const categoryUrls = categories.map((category) => {
    const categoryUrl = `${baseUrl}category/${category.url}`
    const categoryTitle = `Meetdox - ${category.name}s`
    return { url: categoryUrl, title: categoryTitle, lastModified: new Date() }
  })

  const subCategoryUrls = categories.flatMap((category) => {
    return category.subCategories.map((subCategory) => {
      const subCategoryUrl = `${baseUrl}category/${category.url}?sub-categories=${subCategory.url}`
      const subCategoryTitle = `Meetdox - ${subCategory.name}s`
      return {
        url: subCategoryUrl,
        title: subCategoryTitle,
        lastModified: new Date(),
      }
    })
  })
  const expertUrls = await Promise.all(
    expertsData.map(async (item: string) => {
      try {
        const expertDataRes = await fetch(
          `${API_URL}/users/teacher/get-teacher?uid=${item}`
        )
        const expertDataJs = await expertDataRes.json()
        const expertData = expertDataJs.data

        const expertUrl = `${baseUrl}expert/${item}`
        const expertName = `${expertData.personalDetails.name} ${expertData.personalDetails.lastName}`
        const expertDescription = expertData.description
        const expertImage = expertData.image

        return {
          url: expertUrl,
          title: `Meetdox - Schedule Meet With ${expertName}`,
          description: expertDescription,
          image: expertImage,
          lastModified: new Date(),
        }
      } catch (error) {
        console.error(`Error fetching data for expert with ID ${item}:`, error)
        return null
      }
    })
  )
  return [...staticPages, ...expertUrls, ...categoryUrls, ...subCategoryUrls]
}

export default sitemap
