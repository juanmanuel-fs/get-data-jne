export interface CategoryModel {
  id: number
  name: string
}

export interface SearchNewsModel {
  value: string
  categories?: number []
  state?: number
  organization?: number
}