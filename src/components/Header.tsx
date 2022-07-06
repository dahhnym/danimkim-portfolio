import styled from "styled-components";

const Header = () => {
  return (
    <HeaderCont>
      <h1>danimkim(로고)</h1>
      <Wrapper>
        <nav>
          <Ul>
            <Li>About Me</Li>
            <Li>Skills</Li>
            <Li>Project</Li>
            <Li>FAQ</Li>
            <Li>Contact</Li>
            <Li>See Resume</Li>
          </Ul>
        </nav>
        <Button>Dark mode</Button>
      </Wrapper>
    </HeaderCont>
  );
};

export default Header;

const HeaderCont = styled.header`
  border-bottom: solid 1px #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 140px;
  padding: 0 5rem;
  @media screen and (max-width: 1280px) {
    height: 120px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  padding: 1rem;
`;

const Button = styled.button`
  border: solid 1px pink;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
