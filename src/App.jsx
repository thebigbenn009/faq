import React, { useState } from "react";
import "./index.css";
import { questions } from "./Questions";
import Question from "./components/Question";

function App() {
  return (
    <main>
      <section className="main-section">
        <div className="left-section">
          <div className="image"></div>
        </div>
        <div className="right-section">
          <div className="faq-container">
            <h3>FAQ</h3>
            {questions.map((eachQuestion) => (
              <Question key={eachQuestion.id} {...eachQuestion} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
