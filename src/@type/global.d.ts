type TMenuItem = {
  route: string
  label: string
  icon: string
}

type TBlogItem = {
  title: string
  desc: string
  url: string
  date: string
}

type TProjectItem = {
  title: string
  desc: string
  github: string
  document: string
  languages: string[]
  stars: number
}

type TWishListItem = {
  name: string
  status: 'done' | 'todo'
  imgs?: string[]
  date?: string
}
