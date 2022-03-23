import React from "react";

const App = () => {
  return (
    <div>
      App {process.env.NODE_ENV} {process.env.name}
    </div>
  );
};

export default App;
