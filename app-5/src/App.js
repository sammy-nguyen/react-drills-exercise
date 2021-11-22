import React from "react";

import "./App.css";
import Image from "./Image";

function App() {
  return (
    <div className="App">
      <Image
        imageSource={
          "https://images.unsplash.com/photo-1637506235815-01d9d777592e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        }
      />
    </div>
  );
}

export default App;
