import styled from "styled-components";

const Intro = () => {
  return (
    <Section>
      <Heading>안녕하세요. 프론트엔드 개발자 김다님입니다.</Heading>
      <Para>저의 포트폴리오 사이트에 오신 것을 환영합니다.</Para>
    </Section>
  );
};

export default Intro;

const Section = styled.section`
  height: calc(100vh - 140px);
  position: relative;
  padding-left: 127px;
  @media screen and (max-width: 1280px) {
    height: calc(100vh - 120px);
  }
`;
const Heading = styled.h2`
  font-size: 3rem;
  position: absolute;
  top: 192px;
`;

const Para = styled.p`
  font-size: 1.5rem;
  position: absolute;
  top: 384px;
  width: 700px;
  padding: 1rem;
`;
