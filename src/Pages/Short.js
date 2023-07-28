import React, { useState } from "react";
import "../CSS/Short.css";
import CopyButton from "../components/CopyButton";
import axios from "axios";

const Short = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      setLoading(false);
      setResult(res.data.result.full_short_link);
    } catch (err) {
      alert(err);
    }
  };

  const handleclick = () => {
    fetchData();
    setInput(" ");
  };


  const handleClearClick = () => {
    setResult("");
  };

  return (
    <>
      <div className="short">
        <input
          type="text"
          placeholder="Shorten a link here...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleclick}>Shorten it!</button>
      </div>
      <div className="div">
      {loading ? (
        <p className="load">Loading...</p>
      ) : (
        <div className={result ? ("copy") : ("random")}>
          <p className="result">{result}</p>
          {result ? (<CopyButton textToCopy={result} />) : (null)}
          {result ? (<button className="clear" onClick={handleClearClick}>Clear</button>) : null}
        </div>
      )}
      </div>
    </>
  );
};

export default Short;
