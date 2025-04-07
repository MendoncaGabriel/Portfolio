import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GETByURLTitle(urlTitle: string) {
  const title = urlTitle.replace("/artigo/", "")

  const post = await prisma.post.findFirst({
    where: {
      urlTitle: title
    }
  })
  
  return post
}
export async function ListArticles() {
  const posts = await prisma.post.findMany({
    orderBy: {
      date: 'desc'
    }
  })
  return posts
}
