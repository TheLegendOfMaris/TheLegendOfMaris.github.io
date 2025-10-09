import TechnologyCard from './TechnologyCards';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-30">
          <TechnologyCard
            title="Programmiersprachen"
            technologies="C/C++, Java, JavaScript, TypeScript"
            icons={[
              { src: '/src/assets/Icons/C++Icon.png', name: 'C++' },
              { src: '/src/assets/Icons/JavaIcon.png', name: 'Java' },
              {
                src: '/src/assets/Icons/JavaScriptIcon.png',
                name: 'JavaScript',
              },
              {
                src: '/src/assets/Icons/TypeScriptIcon.png',
                name: 'TypeScript',
              },
            ]}
          />
          <TechnologyCard
            title="Web- & Softwareentwicklung"
            technologies="React, Tailwind CSS, Bootstrap, Node.js, MySQL, OpenAI API, Swagger, Jest"
            icons={[
              { src: '/src/assets/Icons/ReactIcon.png', name: 'React' },
              { src: '/src/assets/Icons/TailwindIcon.png', name: 'Tailwind' },
              { src: '/src/assets/Icons/BootstrapIcon.png', name: 'Bootstrap' },
              { src: '/src/assets/Icons/NodejsIcon.png', name: 'Node.js' },
              { src: '/src/assets/Icons/MySQLIcon.png', name: 'MySQL' },
              { src: '/src/assets/Icons/OpenAIIcon.png', name: 'OpenAI API' },
              { src: '/src/assets/Icons/JestIcon.png', name: 'Jest' },
              { src: '/src/assets/Icons/SwaggerIcon.png', name: 'Swagger' },
            ]}
          />
          <TechnologyCard
            title="Tools & Sonstiges"
            technologies="GitHub, Azure DevOps, Docker, Figma, Unity, Blender"
            icons={[
              { src: '/src/assets/Icons/GitHubIcon.png', name: 'GitHub' },
              {
                src: '/src/assets/Icons/AzureDevOpsIcon.png',
                name: 'Azure DevOps',
              },
              { src: '/src/assets/Icons/DockerIcon.png', name: 'Docker' },
              { src: '/src/assets/Icons/FigmaIcon.png', name: 'Figma' },
              { src: '/src/assets/Icons/UnityIcon.png', name: 'Unity' },
              { src: '/src/assets/Icons/BlenderIcon.png', name: 'Blender' },
            ]}
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
