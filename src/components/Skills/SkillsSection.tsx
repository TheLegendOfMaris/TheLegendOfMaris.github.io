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
              { src: '/Icons/C++Icon.png', name: 'C++' },
              { src: '/Icons/JavaIcon.png', name: 'Java' },
              {
                src: '/Icons/JavaScriptIcon.png',
                name: 'JavaScript',
              },
              {
                src: '/Icons/TypeScriptIcon.png',
                name: 'TypeScript',
              },
            ]}
          />
          <TechnologyCard
            title="Web- & Softwareentwicklung"
            technologies="React, Tailwind CSS, Bootstrap, Node.js, MySQL, OpenAI API, Swagger, Jest"
            icons={[
              { src: '/Icons/ReactIcon.png', name: 'React' },
              { src: '/Icons/TailwindIcon.png', name: 'Tailwind' },
              { src: '/Icons/BootstrapIcon.png', name: 'Bootstrap' },
              { src: '/Icons/NodejsIcon.png', name: 'Node.js' },
              { src: '/Icons/MySQLIcon.png', name: 'MySQL' },
              { src: '/Icons/OpenAIIcon.png', name: 'OpenAI API' },
              { src: '/Icons/JestIcon.png', name: 'Jest' },
              { src: '/Icons/SwaggerIcon.png', name: 'Swagger' },
            ]}
          />
          <TechnologyCard
            title="Tools & Sonstiges"
            technologies="GitHub, Azure DevOps, Docker, Figma, Unity, Blender"
            icons={[
              { src: '/Icons/GitHubIcon.png', name: 'GitHub' },
              {
                src: '/Icons/AzureDevOpsIcon.png',
                name: 'Azure DevOps',
              },
              { src: '/Icons/DockerIcon.png', name: 'Docker' },
              { src: '/Icons/FigmaIcon.png', name: 'Figma' },
              { src: '/Icons/UnityIcon.png', name: 'Unity' },
              { src: '/Icons/BlenderIcon.png', name: 'Blender' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
