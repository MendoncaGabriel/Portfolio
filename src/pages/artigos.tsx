import { GetStaticProps } from "next";
import { ArticleCard } from "../components/ArticleCard";
import { ListArticles } from "./api/post";

function getPreview(content: string, length = 160): string {
  const clean = content
    .replace(/[#>*_`\-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return clean.length > length ? clean.substring(0, length) + "..." : clean;
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

type Article = {
  title: string;
  content: string;
  coverImage?: string;
  author?: string;
  date?: string | Date;
};

type Props = {
  articles: Article[];
};

export default function ArtigosPage({ articles }: Props) {
  return (
    <div className="text-gray-50 h-full p-6 sm:p-10">
      <section className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Últimos Artigos</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr w-full">
          {articles.map((article, key) => (
            <ArticleCard
              key={key}
              title={article.title}
              description={getPreview(article.content)}
              imageUrl={article.coverImage!}
              author={article.author}
              date={formatDate(new Date(article.date!))}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const rawArticles = await ListArticles();

  const articles = rawArticles.map((article) => ({
    ...article,
    date: article.date ? new Date(article.date).toISOString() : null,
  }));

  return {
    props: {
      articles,
    },
    revalidate: 60 * 5,
  };
};
