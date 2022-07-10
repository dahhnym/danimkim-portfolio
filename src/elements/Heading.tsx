import styled from 'styled-components';

interface Props {
  children: string;
}

const Heading = ({ children }: Props) => {
  return <H2>{children}</H2>;
};

export default Heading;

const H2 = styled.h2`
  font-size: 3rem;
  line-height: 2.5;
  opacity: 10%;
  font-family: 'Nanum Myeongjo', serif;
  font-weight: bold;
  @media screen and (min-width: 640px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 5rem;
    line-height: 2;
  }
`;
