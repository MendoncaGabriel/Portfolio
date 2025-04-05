import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  author?: string;
  date?: string;
};

export function ArticleCard({
  title,
  description,
  imageUrl,
  author,
  date,
}: ArticleCardProps) {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const slug = slugify(title);

  return (
    <Link
      href={`/artigo/${slug}`}
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
    </Link>
  );
}
