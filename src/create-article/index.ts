import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

const markdownPath = path.join(__dirname, "index.md");

const markdownContent = fs.readFileSync(markdownPath, "utf-8");

async function main() {
  await prisma.post.update({
    where: { id: 1 },
    data: { content: markdownContent },
  });

  console.log("Post atualizado com sucesso");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
