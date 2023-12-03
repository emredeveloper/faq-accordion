import React, { useState, useEffect } from "react";
import Question from "./Question";
import LoginModal from "./LoginModal";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function App() {
  const [newQuestion, setNewQuestion] = useState("");
  const [newInfo, setNewInfo] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Önceden belirlenmiş e-posta ve şifre
  const predefinedEmail = "test@gmail.com";
  const predefinedPassword = "123";

  useEffect(() => {
    // Sayfa yüklendiğinde otomatik giriş yap
    handleLogin(predefinedEmail);
  }, []);

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

  const handleLogin = (userEmail) => {
    // Giriş yapan kullanıcıyı setLoggedInUser ile güncelle
    setLoggedInUser(userEmail);
  };

  const handleLogout = () => {
    // Çıkış yapınca setLoggedInUser'ı null yaparak kullanıcıyı temizle
    setLoggedInUser(null);
  };

  return (
      <>
        <div className="header">
          <h1>Project 2: FAQ/Accordion</h1>
          {loggedInUser ? (
              <div className="user-menu">
                <span>Giriş yapan kullanıcı: {loggedInUser}</span>
                <Button variant="danger" onClick={handleLogout}>
                  Çıkış Yap
                </Button>
              </div>
          ) : (
              <Button variant="primary" onClick={() => setShowLoginModal(true)}>
                Giriş Yap
              </Button>
          )}
        </div>

        <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} onLogin={handleLogin} />

        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="questions">
            {questions.map((question) => (
                <Question key={question.id} question={question.title} info={question.info} />
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
        </div>
      </>
  );
}
