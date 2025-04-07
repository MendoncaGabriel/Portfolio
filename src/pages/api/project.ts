import { db } from "lib/prisma"

export async function listProjects() {

  const projects = await db.project.findMany()
  
  return projects
}

