export default function TechnologyCard({
  title,
  technologies,
  icons,
}: {
  title: string;
  technologies: string;
  icons: { src: string; name: string }[];
}) {
  return (
    <div>
      <div className="relative w-80 h-80 mb-5">
        {/* Background shadow */}
        <div className="bg-[#B6BEEC] opacity-[.59] absolute top-2 left-2 rounded-md h-full w-full"></div>

        {/* Foreground square */}
        <div className="bg-[#D0D7FA] absolute top-0 left-0 rounded-md h-full w-full p-6 flex flex-col items-center justify-center">
          {/* Icons Grid */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {icons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={icon.src}
                  alt={`${icon.name} icon`}
                  className="w-13 h-13 object-contain mb-2"
                />
                <span className="text-xs text-gray-700 text-center">
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-[#FFFFFF] font-semibold">{title}</h3>
      <p className="text-[#828282]">{technologies}</p>
    </div>
  );
}
