import { db } from "lib/prisma"

export async function GETByURLTitle(urlTitle: string) {
  const title = urlTitle.replace("/artigo/", "")

  const post = await db.post.findFirst({
    where: {
      urlTitle: title
    }
  })
  
  return post
}
export async function ListArticles() {
  const posts = await db.post.findMany({
    orderBy: {
      date: 'desc'
    }
  })
  return posts
}
