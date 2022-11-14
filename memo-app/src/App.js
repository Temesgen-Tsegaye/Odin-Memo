import "./App.css";
import Header from "./components/Header/Header";
import ScoreBoard from "./components/ScoreBoard/Score";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
function App() {

       const [score,setScore]=useState(0)
       const[maxScore,setMaxScore]=useState(0)
       const handleScore=(x)=>{
             if(x==1){
              setScore((prive)=>{
                return prive+1
              })
             }
             else if(x==2){
               if(score>maxScore){
                setMaxScore(score)
               }
               
               setScore(0)
             }
            
       }

  return (

    <div className="App">
      <div>
        <Header />
        <ScoreBoard score={score} maxScore={maxScore} />
      </div>
      <Body handleScore={handleScore} score={score} />
      <Footer/>
    </div>
  );
}

export default App;
