import styled from 'styled-components';
import Heading from '../elements/Heading';

const FAQ = () => {
  return (
    <section>
      <Heading>FAQ</Heading>
      <TabContainer>
        <li>질문1</li>
        <li>질문2</li>
        <li>질문3</li>
        <li>질문4</li>
        <li>질문5</li>
        <li>질문6</li>
      </TabContainer>
    </section>
  );
};

export default FAQ;

const TabContainer = styled.ul`
  border: solid 1px red;
`;
