  import { GetServerSideProps } from "next";
  import { GETByURLTitle } from "pages/api/post";
  import Markdown from "react-markdown";
  import Head from 'next/head';


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
  }

  export default function ArticlePage({ data }: Props) {
    if (!data) {
      return (
        <div className="text-center text-red-500 py-10">
          Artigo não encontrado.
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto px-4 py-10 pt-0 md:pt-10">
        <Head>
          <title>{data.title}</title>
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.title} />
          <meta property="og:image" content={data.coverImage || "default-image-url"} />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`https://portfolio-mendoncagabriels-projects.vercel.app/artigo/${data.title}`} /> */}
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:author" content={data.author || "Desconhecido"} />
        </Head>

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
          {data.date && <span>{formatDate(data.date)}</span>}
        </div>

        <article className="prose prose-invert prose-slate max-w-none text-gray-300">
          <Markdown>{data.content}</Markdown>
        </article>
      </div>
    );
  }

  export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug as string;
    console.log(">>> SLUG: ", slug)
  
    try {
      const result = await GETByURLTitle(slug);
  
      const data = result
        ? {
            ...result,
            content: result.content.replace(/\\n/g, '\n'), // aqui está o replace certo
            date:
              result.date instanceof Date
                ? result.date.toISOString()
                : result.date,
          }
        : null;
  
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.error("Erro ao buscar artigo:", error);
      return {
        props: {
          data: null,
        },
      };
    }
  };
  