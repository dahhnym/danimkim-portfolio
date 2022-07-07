import styled from 'styled-components';
import './../App.css';
import logo from './../assets/logo.png';

const Header = () => {
  return (
    <HeaderCont>
      <h1>
        <img src={logo} alt="tinadev" width="100px" />
      </h1>
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
        <button className="NavBtn">Hamburger btn</button>
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
  height: 120px;
  padding: 0 2rem;
  nav {
    display: none;
  }
  .NavBtn {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    height: 140px;
    nav {
      display: block;
    }
    .NavBtn {
      display: none;
    }
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
  border: solid 1px blue;
`;
