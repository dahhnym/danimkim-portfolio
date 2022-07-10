import Heading from '../elements/Heading';
import styled from 'styled-components';
import arrowDown from './../assets/arrow-down.svg';
import { SKILLS } from '../constant/skills';
import { useState } from 'react';

const Skills = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setIsOpen((prev: boolean) => !prev);
    console.log(isOpen);
  };

  return (
    <Section>
      <Heading>Skills</Heading>
      <Tabs>
        <Tab onClick={toggleOpen}>
          <Title>{SKILLS.SKILL1.TITLE}</Title>
          <Desc>{SKILLS.SKILL1.DESC}</Desc>
        </Tab>
        <Tab>
          <Title>{SKILLS.SKILL2.TITLE}</Title>
          <Desc>{SKILLS.SKILL2.DESC}</Desc>
        </Tab>
        <Tab>
          <Title>{SKILLS.SKILL3.TITLE}</Title>
          <Desc>{SKILLS.SKILL3.DESC}</Desc>
        </Tab>
      </Tabs>
    </Section>
  );
};

export default Skills;

const Section = styled.section`
  padding-right: 2rem;
  @media screen and (min-width: 1024px) {
    padding-right: 8rem;
  }
`;

const Tabs = styled.ul`
  /* border: solid 1px blue; */
`;

const Tab = styled.div`
  .active {
    display: block;
  }
`;

const Title = styled.li`
  font-size: 1.8rem;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  border-bottom: solid 2px #858585;
  color: #565656;
  line-height: 2;
  padding-left: 0.5rem;
  &::after {
    transform: translateY(50%);
    width: 24px;
    height: 24px;
    content: '';
    background: url(${arrowDown}) no-repeat;
    float: right;
  }
`;

const Desc = styled.li`
  display: none;
  margin: 1rem 0;
  line-height: 1.5;
`;
