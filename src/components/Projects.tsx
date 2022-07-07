import styled from 'styled-components';
import Heading from '../elements/Heading';

const Projects = () => {
  return (
    <section>
      <Heading>Project</Heading>
      <div>
        <CarouselBox>
          <li>
            <a href="/project">
              <Card>
                <h3>Project01</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime quasi ab delectus laborum officiis quae autem
                  accusantium possimus facere! Omnis a sequi, labore optio ex
                  culpa at dicta eveniet nesciunt.
                </p>
              </Card>
            </a>
          </li>
          <li>
            <Card>Project02</Card>
          </li>
          <li>
            <Card>Project03</Card>
          </li>
        </CarouselBox>
      </div>
    </section>
  );
};

export default Projects;

const CarouselBox = styled.ul`
  border: solid 1px red;
  display: flex;
  overflow-x: scroll;
`;

const Card = styled.article`
  border: solid 1px ${(props) => props.theme.babypink};
  min-width: 400px;

  @media screen and (min-width: 640px) {
    width: 500px;
  }
  @media screen and (min-width: 1024px) {
    width: 620px;
    h3 {
      font-size: 5rem;
      line-height: 5rem;
      margin-bottom: 1rem;
    }
    padding: 2rem;
  }
`;
