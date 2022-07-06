import React from "react";
import "./App.css";
import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Splash from "./pages/Splash";
import Intro from "./components/Intro";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {/* 추후에 path 이름 '/'로 변경 예정 */}
          <Route path='/splash' element={<Splash />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <main>
        <Intro />
        <section>
          <h2>Skills</h2>
        </section>
        <section>
          <h2>Project</h2>
        </section>
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
      </main>
      <footer>
        <p>&copy; Copyright. All rights reserved. Danim Kim 2022 </p>
      </footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: radial-gradient(#0fc2c0, transparent);
  /* background: radial-gradient(ellipse at top, #0fc2c0, transparent 50%),
    radial-gradient(ellipse at bottom, #008f8c, transparent 60%); */
`;

const Scroll = styled.p`
  font-size: 2rem;
  position: absolute;
  right: 5rem;
  bottom: 3rem;
  writing-mode: vertical-lr;
  &:hover {
    color: #0fc2c0;
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
