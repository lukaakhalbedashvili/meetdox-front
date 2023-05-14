export interface SubCategory {
  name: string
  url: string
  checked: boolean
}

export interface Category {
  name: string
  url: string
  skills: string[]
  subCategories:
    | {
        name: string
        url: string
      }[]
}
