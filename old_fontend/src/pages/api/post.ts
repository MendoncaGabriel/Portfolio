import { db } from "lib/prisma"

export async function GETByURLTitle(title: string) {
  return await db.post.findFirst({
    where: {
      urlTitle: title
    }
  })
}

export async function ListArticles() {
  return await db.post.findMany({
    orderBy: {
      date: 'desc'
    }
  })
}
