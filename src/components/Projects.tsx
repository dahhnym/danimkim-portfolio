import styled from 'styled-components';
import Heading from '../elements/Heading';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectArr = ['Kiwitter', 'Checo', '공유노트'];
  return (
    <Section>
      <Heading>Project</Heading>
      <div>
        <CarouselBox>
          {projectArr.map((project) => {
            return (
              <li key={project}>
                <ProjectCard projectName={project} />
              </li>
            );
          })}
        </CarouselBox>
      </div>
    </Section>
  );
};

export default Projects;

const Section = styled.section``;

const CarouselBox = styled.ul`
  display: flex;
  overflow-x: scroll;
`;
