import TechnologyCard from './TechnologyCards';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-30">
          <TechnologyCard
            title="Programmiersprachen"
            technologies="C/C++, Java, JavaScript"
            icons={['cplusplus', 'javascript']}
          />
          <TechnologyCard
            title="Web- & Softwareentwicklung"
            technologies="React, Tailwind CSS, Bootstrap, Prisma, MySQL, Swagger, Jest, OpenAI API"
            icons={['/path/to/icon1.png', '/path/to/icon2.png']}
          />
          <TechnologyCard
            title="Tools & Sonstiges"
            technologies="GitHub, Docker, Unity, Blender, Figma"
            icons={['/path/to/icon1.png', '/path/to/icon2.png']}
          />
        </div>

        <div className="mt-12 text-gray-300 text-sm max-w-3xl">
          <p className="mb-4">
            Note: Just for your whole online or real. Web out in some cases to
            show how a text can look like.
          </p>
          <p>
            Exception without meaning, vision matter when rules carefully
            created these conceptualized pages can feel received the obvious
            Content. Age, optimization of tools that cut. Practical referencing,
            systematically space-traveler standard tools, Photoshop,
            Illustrator, Sketch, Figma, Axure, Framer, Webflow, UXPin, Adobe XD,
            perfect balance between designing, and seamless coding, or further
            information from developers. Others need to workplace doesn't need.
            Let's not always perfect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
