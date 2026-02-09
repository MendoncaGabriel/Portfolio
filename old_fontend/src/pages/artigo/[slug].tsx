import { GetServerSideProps } from "next";
import { GETByURLTitle } from "pages/api/post";
import Markdown from "react-markdown";
import Head from 'next/head';
import { FloatingReadButton } from "components/FloatingReadButton";

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

function formatDate(dataISO: string): string {
  const data = new Date(dataISO);

  const opcoes: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return data.toLocaleDateString('pt-BR', opcoes);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;
  const result = await GETByURLTitle(slug.replace("/artigo/", ""));

  if (!result) return {
    props: {
      data: null,
    },
  };

  const data = {
    ...result,
    content: result?.content.replace(/\\n/g, '\n'),
    date: result?.date instanceof Date ? result.date.toISOString() : result?.date,
  }

  return {
    props: {
      data,
    },
  };
};

export default function ArticlePage({ data }: Props) {
  if (!data) {
    return (
      <div className="text-center text-red-500 py-10">
        Artigo não encontrado.
      </div>
    );
  }

  function limitedDescription(texto: string, limite = 110): string {
    return texto.length > limite
      ? texto.slice(0, limite - 3).trimEnd() + "..."
      : texto;
  }
  

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pt-0 md:pt-10">
      <Head>
        <title>{data.title}</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={limitedDescription(data.content, 100)} />
        <meta property="og:image" content={data.coverImage || "default-image-url"} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:author" content={data.author || "Desconhecido"} />
      </Head>


      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-100 leading-tight mb-4">
        {data.title}
      </h1>

      {data.coverImage && (
        <div className="relative w-full rounded-2xl shadow mb-6">
          <img
            src={data.coverImage}
            alt={data.title}
            className="w-full h-auto object-contain"
          />
        </div>
      )}

      <div className="text-sm text-gray-400 mb-10 flex items-center gap-2">
        {data.author && <span>Por {data.author}</span>}
        {data.author && data.date && <span className="text-gray-400">•</span>}
        {data.date && <span>{formatDate(data.date)}</span>}
      </div>

      <article id="article-content" className="prose prose-invert prose-slate max-w-none text-gray-300 text-lg">
        <FloatingReadButton />

        <Markdown>{data.content}</Markdown>
      </article>
    </div>
  );
};
