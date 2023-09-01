export interface TeacherDomainInfoValidationForm {
  category: string
  subCategories: string[]
}

export enum DomainNames {
  CATEGORY = 'category',
  SUB_CATEGORY = 'subCategories',
  DOMAIN = 'domain',
}
