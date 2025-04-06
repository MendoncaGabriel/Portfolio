import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const markdownPath = path.join(__dirname, "index.md");
const markdownContent = fs.readFileSync(markdownPath, "utf-8");

function convertToKebabCase(title: string): string {
  return title
    .trim()                          // Remove any leading or trailing spaces
    .toLowerCase()                   // Convert the string to lowercase
    .replace(/\s+/g, '-')            // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '')      // Remove non-alphanumeric characters (except hyphens)
    .replace(/--+/g, '-')            // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$|\s/g, '');       // Remove hyphens at the start or end, and spaces
}

async function main() {
  const title = "Descomplicando os Princípios SOLID: Um Guia Profundo para Desenvolvedores"
  const urlTitle = convertToKebabCase(title); 

  await prisma.post.create({
    data: { 
      id: 5,
      coverImage: `/images/articles/${urlTitle}.png`,
      author: "Gabriel Andrade",
      title,
      urlTitle,
      content: markdownContent
    },
  });

  console.log("Post criado com sucesso");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
