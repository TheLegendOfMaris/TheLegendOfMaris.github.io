import Grid from './ProjectGrid';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-[#F7F7F7]/[0.16]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projekte</h2>

        <div className="space-y-16"></div>
        <Grid />
      </div>
    </section>
  );
};

export default Projects;
