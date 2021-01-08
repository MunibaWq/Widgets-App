import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log("I RUN WITH EVERY RENDER");
  useEffect(() => {
    console.log("I ONLY RUN ONCE");
  }, []);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" onChange={(e) => setTerm(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Search;
