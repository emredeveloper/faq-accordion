import React, { useState } from "react";

export default function Question({ question, info }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className={isOpen ? "question open" : "question closed"}>
            <div className="question-header">
                <h4>{question}</h4>
                <button onClick={() => setOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
            </div>
            {isOpen && <p>{info}</p>}
        </section>
    );
}
