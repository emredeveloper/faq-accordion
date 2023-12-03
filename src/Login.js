import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Eposta ve şifre kontrolü yapılabilir
        onLogin();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Eposta:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Şifre:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Giriş Yap</button>
        </form>
    );
};

const RobotVerificationForm = ({ onVerification }) => {
    const [verificationCode, setVerificationCode] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Robot olmadığını doğrulamak için gerekli işlemler yapılabilir
        onVerification();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Robot değilim doğrulama kodu:
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Doğrula</button>
        </form>
    );
};

const Login = () => {
    const [isRobotVerification, setIsRobotVerification] = useState(false);

    const handleLogin = () => {
        // Burada giriş işlemleri yapılabilir
        // Örneğin, kullanıcı bilgilerini kontrol etmek ve giriş yapmak
        console.log("Giriş yapıldı!");
    };

    const handleVerification = () => {
        // Robot doğrulama işlemi tamamlandığında yapılacak işlemler
        setIsRobotVerification(false);
        // Diğer giriş işlemleri yapılabilir
        handleLogin();
    };

    return (
        <div>
            {isRobotVerification ? (
                <RobotVerificationForm onVerification={handleVerification} />
            ) : (
                <LoginForm onLogin={() => setIsRobotVerification(true)} />
            )}
        </div>
    );
};

export default Login;
