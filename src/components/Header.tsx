import styled from 'styled-components';
import './../App.css';
import logo from './../assets/logo.png';
import Hamburger from './../assets/Hamburger.svg';
import Dark from './../assets/Dark.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderCont>
      <h1>
        <Link to="/">
          <img src={logo} alt="tinadev" width="130px" />
        </Link>
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
        <button>
          <DarkmodeIcon src={Dark} />
        </button>
        <button className="navBtn">
          <NavbarIcon src={Hamburger} />
        </button>
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
  height: 100px;
  padding: 0 2rem;
  nav {
    display: none;
  }
  .navBtn {
    display: block;
  }
  @media screen and (min-width: 780px) {
    height: 140px;
    nav {
      display: block;
    }
    .navBtn {
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DarkmodeIcon = styled.img`
  width: 1.8rem;
  @media screen and (min-width: 640px) {
    width: 2.2rem;
  }
`;
const NavbarIcon = styled.img`
  margin-left: 1.3rem;
  width: 1.5rem;
  @media screen and (min-width: 640px) {
    width: 2rem;
  }
`;
