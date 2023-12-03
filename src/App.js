import React, { useState } from "react";
import Question from "./Question";
import "./style.css";
import Login from "./Login";

export default function App() {
  const [newQuestion, setNewQuestion] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleQuestionSubmit = () => {
    // Yeni soruyu ve bilgiyi listeye ekleyen fonksiyon
    if (newQuestion && newInfo) {
      const newQuestionObj = {
        id: questions.length + 1,
        title: newQuestion,
        info: newInfo
      };
      setQuestions((prevQuestions) => [...prevQuestions, newQuestionObj]);
      // Ekledikten sonra inputları temizle
      setNewQuestion("");
      setNewInfo("");
    }
  };

  const [questions, setQuestions] = useState([
    // Mevcut sorular
    {
      id: 1,
      title: "Is this a good product?",
      info:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    // Diğer sorular...
  ]);

  const handleLogin = () => {
    // Burada kullanıcı girişi kontrolü yapılabilir
    // Eğer başarılı ise isLoggedIn state'ini true yapabilirsiniz
    setIsLoggedIn(true);
  };

  return (
      <>
        <div className="header">
          <h1>Project 2: FAQ/Accordion</h1>
          <div className="user-menu">
            {isLoggedIn ? (
                <>
                  <span>Hoş geldiniz!</span>

                </>
            ) : (
                <>
                  <button onClick={() => setIsLoggedIn(true)}>Giriş Yap</button>
                  <button>Kayıt Ol</button>
                </>
            )}
          </div>
        </div>
        <div className="container">
          {isLoggedIn && (
              <>
                <h2>Frequently Asked Questions</h2>
                <div className="questions">
                  {questions.map((question) => (
                      <Question
                          key={question.id}
                          question={question.title}
                          info={question.info}
                      />
                  ))}
                </div>
                <div className="add-question">
                  {/* Yeni soru eklemek için form */}
                  <input
                      type="text"
                      placeholder="New question"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                  />
                  <textarea
                      placeholder="Answer"
                      value={newInfo}
                      onChange={(e) => setNewInfo(e.target.value)}
                  />
                  <button onClick={handleQuestionSubmit}>Submit</button>
                </div>
              </>
          )}
        </div>
      </>
  );
}
