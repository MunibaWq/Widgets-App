import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  console.log("I RUN WITH EVERY RENDER");
  useEffect(() => {
    console.log(
      "I RUN AFTER EVERY RENDER AND AT INITIAL RENDER AND WHEN DATA HAS CHANGED (in this case the state 'term')"
    );
  }, [term]);

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
