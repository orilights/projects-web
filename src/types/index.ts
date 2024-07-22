export interface ProjectConfig {
  name: string
  status: 'production' | 'experimental' | 'deprecated'
  description: string
  cover?: string
  lastUpdated?: string
  star?: number
  link: {
    website: string
    github?: string
  }
}
