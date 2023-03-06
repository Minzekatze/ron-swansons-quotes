import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((response) => {
          setQuote(response.data);
        })
        .catch((error) => {
          console.log(`${error} COMPUTER SAYS N000OOo...`);
        });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>{quote}</p>
    </div>
  );
}

export default App;
