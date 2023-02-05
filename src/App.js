import React, { useState } from "react";

import "./App.css";

const options = [
  {
    text: "O que é React?",
    answer: "React é uma biblioteca JavaScript para criar interfaces de usuário."
  },
  {
    text: "Como funciona o React?",
    answer:
      "O React funciona mantendo um estado do seu aplicativo em uma árvore de componentes e atualizando a interface do usuário quando o estado muda."
  },
  {
    text: "Por que usar o React?",
    answer:
      "O React é usado porque é uma biblioteca eficiente e escalável para criar aplicativos complexos com interface de usuário reativa."
  }
];

function Chat () {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`chat-container ${isMinimized ? "minimized" : ""}`}>
      <div className="title">
        <span>{isMinimized ? "?" : "Precisa de ajuda?"}</span>
        <button className="minimize-button" onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? "?" : "-"}
        </button>
      </div>
      {selectedOption ? (
        <>
          <div className="answer">{selectedOption.answer}</div>
          <button className="back-button" onClick={() => setSelectedOption(null)}>
            Voltar
          </button>
        </>
      ) : (
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => setSelectedOption(option)}
            >
              {option.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Chat;
