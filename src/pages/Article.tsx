import { FC } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { articles } from '../articles';

export const Article: FC = () => {
  const { slug } = useParams(); // slug = 'rabbitmq', por exemplo

  const data = articles[slug as keyof typeof articles];

  if (!data) {
    return <div className="text-center text-red-500 py-10">Artigo não encontrado.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-100 leading-tight mb-4">
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
};
