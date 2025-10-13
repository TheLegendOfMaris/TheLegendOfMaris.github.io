import { CardLeft, CardRight } from './ProjectCard';
import { projects } from './ProjectInfo';

const Grid = () => {
  return (
    <>
      {projects.map((project, index) =>
        index % 2 === 0 ? (
          <CardLeft key={index} project={project} />
        ) : (
          <CardRight key={index} project={project} />
        )
      )}
    </>
  );
};

export default Grid;
