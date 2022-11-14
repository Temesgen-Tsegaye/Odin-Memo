import styles from "./Body.module.css";
import { Level1, Level2, Level3 } from "../../Data/Data";
import { useState, useEffect, useRef } from "react";

const Body = ({ handleScore, score }) => {
  const [arr, setArr] = useState(Level1);
  const [clicked, setClicked] = useState([99]);
  const [Level, setLevel] = useState(1);
  const [LossPopUp, setLosePopUp] = useState(true);
  // const [G,setG]=useState(true)
  const privScore = useRef(0);
  useEffect(() => {
    privScore.current = score;
    
  },[score]);

  useEffect(() => {
    switch (Level) {
      case 1:
        setArr(Level1);
        handleScore(2);
        break;
      case 2:
        setArr(Level2);
        handleScore(2);
        break;
      case 3:
        setArr(Level3);
        handleScore(2);
        break;
      default:
        break;
    }
  }, [Level]);
  
  let checkRender =
    (Level == 1 && score == 6) ||
    (Level == 2 && score == 11) ||
    (Level == 3 && score == 19);
  // console.log(LevelChange());
  const Shuffle = (e) => {
  //   setG((prive)=>{
  //  return !prive
  //   })

    let r = e.target.id;
    let shuffled = arr.map((items) => items).sort(() => Math.random() - 0.5);

    var checkClicked = clicked.some((item) => {
      return item == r;
    });

    if (checkClicked) {
      setLosePopUp((prive) => !prive);
      handleScore(2);
      setClicked([]);
    } else {
      setClicked((prive) => {
        return [...prive, e.target.id];
      });
      handleScore(1);
      setArr(shuffled);
      
      
    }
  };
  // useEffect(()=>{
  //   setTimeout(function(){
  //     setG((prive)=>!prive)
  //   },600)
  // },[clicked])
  let v = arr.map((items) => {
    return (
      <img className={styles.image}
        onClick={(e) =>{Shuffle(e)} }
        key={items.id}
        id={items.id}
        src={items.image}
        alt=""
        width="300px"
        height="300px"
      />
    );
  });
  return (
    <div className={styles.Body}>
      {!LossPopUp && (
        <div className={styles.loss}>
         <p>score:{privScore.current}</p> 
        
     
          <button onClick={() => setLosePopUp((prive) => !prive)}>Play Again</button>
        </div>
      )}

      {checkRender && (
        <div className={styles.next}>
          <p>Level {Level + 1}</p>
        {Level!=3&& <button
            onClick={() => {
              setLevel((prive) => prive + 1);
            }}
          >
            {" "}
            Next
          </button>  }
          <button>repaly</button>
        </div>
      )}

      {LossPopUp && !checkRender&& v}
    </div>
  );
};
export default Body;
