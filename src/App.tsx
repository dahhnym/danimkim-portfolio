import React from 'react';
import './App.css';
import './styles/reset.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Splash from './pages/Splash';
import Intro from './components/Intro';
import styled from 'styled-components';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {/* 추후에 path 이름 '/'로 변경 예정 */}
          <Route path="/splash" element={<Splash />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Wrapper>
        <Main>
          <Intro />
          <Skills />
          <Projects />
          <section>
            <h2>FAQ</h2>
            <ul>
              <li>질문1</li>
              <li>질문2</li>
              <li>질문3</li>
              <li>질문4</li>
              <li>질문5</li>
              <li>질문6</li>
            </ul>
          </section>
          <section>
            <h2>Contact</h2>
          </section>
          <Scroll>Scroll →</Scroll>
        </Main>
        <footer>
          <p>&copy; Copyright. All rights reserved. Danim Kim 2022 </p>
        </footer>
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: radial-gradient(closest-corner at 30% 40%, #d99c9c, transparent),
    radial-gradient(closest-corner at 70% 60%, #d38484, transparent);
  /* height: 100vh; */
  /* animation: 10s infinite ease-in-out alternate bgColorRotation; */
  /* @keyframes bgColorRotation {
    0% {
      background: radial-gradient(
          closest-corner at 30% 40%,
          #d99c9c,
          transparent
        ),
        radial-gradient(closest-corner at 70% 60%, #d38484, transparent);
    }
    30% {
      background: radial-gradient(
          closest-corner at 50% 40%,
          #d99c9c,
          transparent
        ),
        radial-gradient(closest-corner at 60% 60%, #d38484, transparent);
    }
    60% {
      background: radial-gradient(
          closest-corner at 50% 60%,
          #d38484,
          transparent
        ),
        radial-gradient(closest-corner at 60% 40%, #d99c9c, transparent);
    }
    100% {
      background: radial-gradient(
          closest-corner at 30% 40%,
          #d38484,
          transparent
        ),
        radial-gradient(closest-corner at 40% 40%, #d99c9c, transparent);
    }
  } */
`;

const Wrapper = styled.div`
  border: solid 1px red;
`;

const Main = styled.main`
  @media screen and (min-width: 640px) {
    padding-left: 80px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 127px;
    /* height: calc(100vh - 120px); */
  }
`;

const Scroll = styled.p`
  font-size: 2rem;
  position: absolute;
  right: 5rem;
  bottom: 3rem;
  writing-mode: vertical-lr;
  &:hover {
    color: ${(props) => props.theme.babypink};
    transition: 0.2s;
    cursor: default;
    animation: 0.4s infinite ease-out alternate bounce;
    @keyframes bounce {
      from {
        margin-bottom: 0;
      }
      to {
        margin-bottom: 2rem;
      }
    }
  }
`;
