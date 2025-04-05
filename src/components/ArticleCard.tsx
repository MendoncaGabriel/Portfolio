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
      className="cursor-pointer max-w-md bg-white rounded-md shadow-md overflow-hidden  duration-200 ease-in-out hover:scale-[102%] hover:border-2 border-gray-200"
    >
      {imageUrl && (
        <div className="w-full aspect-square relative">
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
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
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
