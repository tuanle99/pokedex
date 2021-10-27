import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handlepage(e) {
    history.push("/pokemon/1");
  }

  return (
    <div>
      <button onClick={handlepage}>Home Page</button>
    </div>
  );
}

export default Home;
