"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

type ArticleCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  author?: string;
  date?: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  author,
  date,
}) => {
  const router = useRouter();

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^\w\s-]/g, "") // remove caracteres especiais
      .trim()
      .replace(/\s+/g, "-"); // espaços viram hífens

  const handleClick = () => {
    router.push(`/artigo/${slugify(title)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer max-w-md bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {imageUrl && (
        <div className="w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="p-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        {(author || date) && (
          <div className="text-xs text-gray-400 flex justify-between">
            {author && <span>Por {author}</span>}
            {date && <span>{date}</span>}
          </div>
        )}
      </div>
    </div>
  );
};
