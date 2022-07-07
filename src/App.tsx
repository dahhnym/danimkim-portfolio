import React from 'react';
import './App.css';
import './styles/reset.css';
import Header from './components/Header';
import Intro from './components/Intro';
import styled from 'styled-components';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FAQ from './components/FAQ';

function App() {
  return (
    <Container>
      <Background />
      <Header />
      <Main>
        <Intro />
        <SecondSection>
          <Skills />
          <Projects />
        </SecondSection>
        <FAQ />
        <section>
          <h2>Contact</h2>
        </section>
        <Scroll>
          <span>Scroll</span> →
        </Scroll>
      </Main>
      <footer>
        <p>&copy; Copyright. All rights reserved. Danim Kim 2022 </p>
      </footer>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -9999;
  background: radial-gradient(
      circle at 10% 10%,
      #d99c9c,
      transparent,
      transparent
    ),
    radial-gradient(circle at 80% 100%, #d38484, transparent, transparent);

  @media screen and (min-width: 640px) {
    transition: 0.2s ease-in-out;
    background: radial-gradient(farthest-side at 80% 20%, #d99c9c, transparent),
      radial-gradient(farthest-side at 20% 80%, #d38484, transparent 80%);
  }
  @media screen and (min-width: 1024px) {
    background: radial-gradient(
          closest-corner at 30% 40%,
          #d99c9c,
          transparent 80%
        )
        top left/200% 200%,
      radial-gradient(closest-corner at 70% 60%, #d38484, transparent 80%)
        bottom right/200% 200%;
    animation: gradient 10s ease alternate infinite;
    @keyframes gradient {
      0% {
        background-size: closest-corner;
        background-position: 30% 40%;
      }
      50% {
        background-size: closest-corner;
        background-position: 70% 60%;
      }
      100% {
        background-size: closest-corner;
        background-position: 20% 80%;
      }
    }
  }
`;

const SecondSection = styled.div`
  border: solid 1px red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
`;

const Main = styled.main`
  padding-left: 2rem;
  @media screen and (min-width: 640px) {
    padding-left: 5rem;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 8rem;
  }
`;

const Scroll = styled.p`
  font-size: 2rem;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  writing-mode: vertical-lr;
  span {
    display: none;
  }
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
  @media screen and (min-width: 640px) {
    right: 5rem;
    bottom: 3rem;
    span {
      display: inline-block;
    }
  }
`;
