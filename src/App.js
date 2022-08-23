import React, { useState } from "react";
import data from "./data";

function App() {
    const [amount, setAmount] = useState(0);
    const [paragraphs, setParagraphs] = useState([]);

    const handleAmount = (e) => {
        setAmount(Number(e.target.value));
    };

    const handleParagraphs = (e) => {
        e.preventDefault();
        setParagraphs([]);
        if (amount > 0 && amount < data.length) {
            const newParagraphs = data.slice(0, amount);
            setParagraphs(newParagraphs);
        }
    };

    return (
        <section className="section-center">
            <h3>tire of boring lorem ipsum?</h3>
            <form className="lorem-form" onSubmit={handleParagraphs}>
                <label htmlFor="amount"> Paragraphs:</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => handleAmount(e)}
                />
                <button className="btn" type="submit">
                    generate
                </button>
            </form>
            <article className="lorem-text">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </article>
        </section>
    );
}

export default App;
