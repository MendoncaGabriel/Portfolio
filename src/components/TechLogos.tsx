import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaDocker, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiFastify, SiMysql, SiPrisma, SiMongodb, SiRedis, SiExpress, SiTypescript, SiKnexdotjs, SiRabbitmq, SiJsonwebtokens, SiZod, SiVitess, SiMongoose } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

const icons = [
  { icon: <FaHtml5 />, colorClassName: "text-orange-600" },
  { icon: <FaCss3Alt />, colorClassName: "text-blue-600" },
  { icon: <FaJs />, colorClassName: "text-yellow-600" },
  { icon: <FaNodeJs />, colorClassName: "text-green-600" },
  { icon: <FaReact />, colorClassName: "text-cyan-400" },
  { icon: <FaDocker />, colorClassName: "text-blue-500" },
  { icon: <FaGitAlt />, colorClassName: "text-red-600" },
  { icon: <FaGithub />, colorClassName: "text-white" },
  { icon: <SiFastify />, colorClassName: "text-white" },
  { icon: <SiPrisma />, colorClassName: "text-white" },
  { icon: <RiTailwindCssFill />, colorClassName: "text-[#00FFFF]" },
  { icon: <SiMysql />, colorClassName: "text-[#08668E]" },
  { icon: <BiLogoPostgresql />, colorClassName: "text-[#396C94]" },
  { icon: <SiMongodb />, colorClassName: "text-[#2DA045]" },
  { icon: <SiRedis  />, colorClassName: "text-[#D93327]" },
  { icon: <FaBootstrap />, colorClassName: "text-[#7C12F7]" },
  { icon: <SiExpress  />, colorClassName: "text-white" },
  { icon: <SiTypescript  />, colorClassName: "text-[#377CC8]" },
  { icon: <SiKnexdotjs />, colorClassName: "text-[#E2692D]" },
  { icon: <SiRabbitmq />, colorClassName: "text-[#F26C29]" },
  { icon: <SiJsonwebtokens />, colorClassName: "text-[#EA185D]" },
  { icon: <SiZod />, colorClassName: "text-[#305587]" },
  { icon: <FcLinux />, colorClassName: "" },
  { icon: <SiVitess />, colorClassName: "text-[#FCC932]" },
  { icon: <SiMongoose />, colorClassName: "text-[#880000]" },
  
];

const ScrollingLogoAnimation: React.FC = () => {
  return (
    <div className="sm:w-1/2 w-full overflow-hidden m-auto">
      <motion.div
        className="flex flex-nowrap space-x-8"
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }} // Move exatamente um ciclo para parecer contínuo
      >
        
        {[...Array(10)].flatMap(() => icons).map(({ icon, colorClassName }, iconIndex) => (
          <div key={iconIndex} className={`h-10 text-4xl flex-none ${colorClassName}`}>
            {icon}
          </div>
        ))}

      </motion.div>
    </div>
  );
};


export default ScrollingLogoAnimation;
