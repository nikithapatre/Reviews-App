import React from "react";
import Review from "./Review";
import "./index.css"

function App() {
  return (
   <main> 
   <section className="section-container">
     <div className="title-container"> 
     <h2>Here are my reviews</h2>
     </div>
     <Review />
   </section>
   </main>
  );
}

export default App;
