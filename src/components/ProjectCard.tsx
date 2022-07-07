import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ProjectCardProps {
  projectName: string;
}

const ProjectCard = ({ projectName }: ProjectCardProps) => {
  return (
    <Link to="/project">
      <Overlay>
        <Card>
          <h3>{projectName}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            quasi ab delectus laborum officiis quae autem accusantium possimus
            facere.
          </p>
          <p>더 보기</p>
        </Card>
      </Overlay>
    </Link>
  );
};

export default ProjectCard;

const Overlay = styled.div``;

const Card = styled.article`
  border: solid 2px #884e5a;
  margin-right: 1rem;
  padding: 1.5rem;
  box-sizing: border-box;
  min-width: 300px;
  h3 {
    font-family: 'Nanum Myeongjo', serif;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #884e5a;
  }
  a {
    line-height: 2;
  }
  p {
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 640px) {
    h3 {
      font-size: 3.5rem;
    }
    &:hover,
    ${Overlay} {
      transition: 0.2s ease-in-out;
      background-color: #884e5a;
      color: #eee;
    }
  }
  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 5rem;
      line-height: 5rem;
      margin-bottom: 1rem;
    }
    padding: 2rem;
  }
`;
