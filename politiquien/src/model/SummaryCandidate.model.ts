export interface SummaryCandidate {
  id: string
  name: string
  surname_father: string
  surname_mother?: string
  dni: string
  birthday: string
  legal: number
  image: string
  postulation: {
    state: string
    position: string
    organization: {
      name: string
      image: string
    }
    location: string
  }

}