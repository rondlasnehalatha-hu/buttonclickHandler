
import React from 'react';

function App() {

  const handleClick = () => {
    alert("Button Clicked Successfully!");
  };

  return (
    <div>
      <h1>React Button Click Event</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
