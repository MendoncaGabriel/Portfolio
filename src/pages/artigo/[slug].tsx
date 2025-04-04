import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { articles } from "../../articles";

type ArticleProps = {
  title: string;
  content: string;
  coverImage?: string;
  author?: string;
  date?: string;
};

type Props = {
  data: ArticleProps | null;
};

export default function ArticlePage({ data }: Props) {
  const router = useRouter();

  // loading fallback (caso esteja usando fallback: true)
  if (router.isFallback) {
    return <div className="text-center text-gray-100 py-10">Carregando...</div>;
  }

  if (!data) {
    return (
      <div className="text-center text-red-500 py-10">
        Artigo não encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pt-0">

      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-100 leading-tight mb-4">
        {data.title}
      </h1>

      {data.coverImage && (
        <img
          src={data.coverImage}
          alt={data.title}
          className="w-full object-cover rounded-2xl shadow mb-6"
        />
      )}

      <div className="text-sm text-gray-400 mb-10 flex items-center gap-2">
        {data.author && <span>Por {data.author}</span>}
        {data.author && data.date && <span className="text-gray-400">•</span>}
        {data.date && <span>{data.date}</span>}
      </div>

      <article className="prose prose-invert prose-slate max-w-none text-gray-300">
        <Markdown>{data.content}</Markdown>
      </article>
    </div>
  );
}

// Gera os paths baseados nos slugs dos artigos
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(articles).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // pode usar true se quiser fallback loading
  };
};

// Pega os dados do artigo com base no slug
export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const data = articles[slug as keyof typeof articles] || null;

  return {
    props: {
      data,
    },
  };
};
