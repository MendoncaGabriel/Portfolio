import { JSX } from "react";
import { SiFfmpeg } from "react-icons/si";

import { FaGithub, FaNodeJs, FaDocker, FaHtml5, FaYoutube, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiFastify, SiPostgresql, SiPrisma, SiZod, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiEjs } from "react-icons/si";

const technologyIcons: Record<string, JSX.Element> = {
  "Node.js": <FaNodeJs className="text-green-600" title="Node.js" />,
  "JavaScript": <SiJavascript className="text-yellow-400" title="JavaScript" />,
  "yt-dlp": <FaYoutube className="text-red-500" title="yt-dlp" />,
  "ffmpeg": <SiFfmpeg className="text-blue-400" title="ffmpeg" />,
  "HTML": <FaHtml5 className="text-orange-500" title="HTML" />,
  "CSS": <FaCss3Alt className="text-blue-500" title="CSS" />,
  "EJS": <SiEjs className="text-pink-200" title="EJS" />,
  "Express": <SiExpress className="text-gray-100" title="Express" />,
  "Mongoose": <SiMongodb className="text-green-500" title="Mongoose" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-400" title="TailwindCSS" />,
  "TypeScript": <SiTypescript className="text-blue-500" title="TypeScript" />,
  "Fastify": <SiFastify className="text-white" title="Fastify" />,
  "PostgreSQL": <SiPostgresql className="text-blue-400" title="PostgreSQL" />,
  "Prisma": <SiPrisma className="text-white" title="Prisma" />,
  "Zod": <SiZod className="text-purple-400" title="Zod" />,
  "Docker": <FaDocker className="text-blue-300" title="Docker" />,
};

// Update the buttons section
export function ProjectCard({
  title,
  description,
  siteUrl,
  githubUrl,
  technologies = [],
}: {
  title: string;
  description: string;
  siteUrl?: string;
  githubUrl?: string;
  technologies?: string[];
}) {
  return (
    <div className="bg-[#1a1a1a] p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-gray-800 h-full">
      <div>
        <h2 className="text-xl font-medium text-gray-100 mb-3">{title}</h2>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        
        {technologies.length > 0 && (
          <div className="mt-4">
            <p className="text-lg text-gray-100 mb-2">Tecnologias</p>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <div key={index} className="text-2xl hover:text-3xl opacity-80 hover:opacity-100 transition-all duration-200" title={tech}>
                  {technologyIcons[tech] || tech}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-3 justify-end">
        {siteUrl && (
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#2a2a2a] hover:bg-[#333333] text-gray-300 px-4 py-1.5 transition-colors border border-gray-700"
          >
            Ver projeto
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </a>
        )}
      </div>
    </div>
  );
}
