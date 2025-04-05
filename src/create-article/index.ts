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
  const title = "PrismaORM: Guia Completo para Desenvolvedores Modernos"
  await prisma.post.create({
    data: { 
      id: 3,
      coverImage: "https://qwcyhvevwjacjawavqgx.supabase.co/storage/v1/object/public/portfolio//ChatGPT%20Image%205%20de%20abr.%20de%202025,%2011_23_59.png",
      author: "Gabriel Andrade",
      title,
      urlTitle: convertToKebabCase(title),
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
