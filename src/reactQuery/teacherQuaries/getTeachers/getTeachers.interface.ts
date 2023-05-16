import { GetTeacherData } from '@/components/Catalog/catalog.interface'

export interface TeacherFilter {
  category?: string
  subCategories?: string[]
  skills?: string[]
  country?: string
  limit?: number
  page?: number
  onSuccess?: (data: GetTeacherData) => void
}
