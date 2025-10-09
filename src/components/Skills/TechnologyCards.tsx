import { Icon } from '@iconify/react';

export default function TechnologyCard({
  title,
  technologies,
  icons,
}: {
  title: string;
  technologies: string;
  icons: string[];
}) {
  return (
    <div>
      <div className="relative w-80 h-80 mb-5">
        {/* Background shadow */}
        <div className="bg-[#B6BEEC] opacity-[.59] absolute top-2 left-2 rounded-md h-full w-full flex items-center"></div>
        {/* Foreground square*/}
        <div className="bg-[#D0D7FA] absolute top-0 left-0 rounded-md h-full w-full flex items-center">
          {icons.map((tech) => (
            <Icon
              key={tech}
              icon={`simple-icons/${tech}`}
              width="40"
              height="40"
            />
          ))}
        </div>
      </div>
      <h3 className="text-[#FFFFFF] font-semibold">{title}</h3>
      <p className="text-[#828282]">{technologies}</p>
    </div>
  );
}
