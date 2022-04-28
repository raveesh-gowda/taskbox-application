import React from "react";
import Container from "./Components/Container";

const App = (props) => {
   return (
      <div className="container">
         <h1 className="display-1 bg-dark text-white mb">Task Box</h1>
         <Container />
      </div>
   );
};

export default App;
