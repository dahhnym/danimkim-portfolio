import styled from 'styled-components';
import Heading from '../elements/Heading';

const Projects = () => {
  return (
    <Section>
      <Heading>Project</Heading>
      <div>
        <CarouselBox>
          <li>
            <a href='/project'>
              <Overlay>
                <Card>
                  <h3>Kiwitter</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime quasi ab delectus laborum officiis quae autem
                    accusantium possimus facere! Omnis a sequi, labore optio ex
                    culpa at dicta eveniet nesciunt.
                  </p>
                  <a href='/project'>더 보기</a>
                </Card>
              </Overlay>
            </a>
          </li>
          <li>
            <Card>Checo</Card>
          </li>
          <li>
            <Card>공유노트</Card>
          </li>
        </CarouselBox>
      </div>
    </Section>
  );
};

export default Projects;

const Section = styled.section``;

const CarouselBox = styled.ul`
  border: solid 1px red;
  display: flex;
  overflow-x: scroll;
  li {
    min-width: 300px;
    width: 100%;
  }
`;

const Overlay = styled.div``;

const Card = styled.article`
  border: solid 2px #884e5a;
  height: 245px;
  margin-right: 1rem;
  padding: 1.5rem;
  h3 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #884e5a;
  }
  a {
    line-height: 2;
  }
  &:hover,
  ${Overlay} {
    transition: 0.2s ease-in-out;
    background-color: #884e5a;
    color: #eee;
  }
  @media screen and (min-width: 640px) {
    h3 {
      font-size: 3.5rem;
    }
    @media screen and (min-width: 1024px) {
      h3 {
        font-size: 5rem;
        line-height: 5rem;
        margin-bottom: 1rem;
      }
      padding: 2rem;
    }
  }
`;
