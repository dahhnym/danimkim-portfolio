import styled from 'styled-components';
import './../App.css';
import brush_stroke from './../assets/brush-stroke.png';

const Intro = () => {
  return (
    <Section>
      <Heading>
        안녕하세요. 프론트엔드 개발자 <span>김다님</span>입니다.
      </Heading>
      <Para>저의 포트폴리오 사이트에 오신 것을 환영합니다.</Para>
    </Section>
  );
};

export default Intro;

const Section = styled.section`
  height: calc(100vh - 140px);
  position: relative;
  padding-left: 30px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  position: absolute;
  top: 25%;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
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
    top: 180px;
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1024px) {
    top: 192px;
    font-size: 3rem;
  }
`;

const Para = styled.p`
  font-size: 1.5rem;
  position: absolute;
  top: 384px;
  padding: 1rem;
  word-break: break-all;
`;
