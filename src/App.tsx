import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>danimkim.</h1>
        <nav>
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <section>
        <h2>안녕하세요. 프론트엔드 개발자 김다님입니다.</h2>
        <p>저의 포트폴리오 사이트에 오신 것을 환영합니다.</p>
      </section>
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
      <footer>
        <p>&copy; Copyright. All rights reserved. Danim Kim 2022 </p>
      </footer>
    </div>
  );
}

export default App;
