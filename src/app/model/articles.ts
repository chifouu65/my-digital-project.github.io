export type Articles = Article[]

interface Article {
  categories: Array<string>,
  title: String,
  content: Array<any>,
  img: {
    alt: String,
    url: String
  }
  button: {
    title: String,
    action: Function
  }
}
