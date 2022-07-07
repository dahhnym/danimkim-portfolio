import styled from 'styled-components';
import './../App.css';
import brush_stroke from './../assets/brush-stroke.png';

const Intro = () => {
  return (
    <Section>
      <Heading>
        안녕하세요. 프론트엔드 개발자 <span>김다님</span>입니다.
      </Heading>
      <Para>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore
        sed illum quo. Voluptates, voluptate! Officia, error dolorem. Vero iure
        ex perspiciatis ad eius recusandae alias voluptatem ab nesciunt autem.
      </Para>
    </Section>
  );
};

export default Intro;

const Section = styled.section`
  height: calc(100vh - 140px);
  position: relative;
  padding-right: 1.8rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  line-height: 1.5;
  cursor: default;
  word-break: keep-all;
  span {
    font-family: 'Nanum Myeongjo', serif;
    padding-bottom: 1rem;
    background: url(${brush_stroke}) no-repeat 0 50px;
    background-size: 0;
  }
  &:hover {
    span {
      transition: 0.2s ease-in-out;
      background-size: contain;
      background-position-y: 35px;
    }
  }
  @media screen and (min-width: 640px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const Para = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  word-break: break-all;
`;
