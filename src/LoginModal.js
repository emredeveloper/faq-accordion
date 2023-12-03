// LoginModal.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap stil dosyasını ekleyin

export default function LoginModal({ show, onHide, onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Giriş işlemini gerçekleştirin ve onLogin fonksiyonunu çağırın
        // Örneğin, kullanıcı bilgilerini bir API'ye gönderip, başarılı bir şekilde giriş yaparsa onLogin(email) gibi bir fonksiyonu çağırabilirsiniz.
        // Bu örnekte sadece ekrana e-posta adresini yazdırıyoruz.
        console.log("Giriş Yapıldı: ", email);
        onLogin(email);
        onHide(); // Modal'ı kapat
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Giriş Yap</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Şifre:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="success" onClick={handleLogin}>
                        Giriş Yap
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
