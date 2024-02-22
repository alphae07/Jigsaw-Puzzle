import React, { useEffect, useState } from "react";
import "./puzzle.css";
import "./Level1.css";
import img9 from "./hero9.jpg"
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Timer from "./Timer";

const history = createBrowserHistory();

const Level9 = () => {

    const [text, setText] = useState("Unpuzzle the pieces!!");
    const [time, setTime] = useState(0);
    const [moves, setMoves] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    const [win, setWin] = useState(false);
    const [pieces, setPieces] = useState([]);

    const levels = 16; // Change this to the number of levels you want

  const [puzzle, setPuzzle] = useState([]);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    //resetPuzzle();
    if (level === 10) {
      history.push('/Level10');
    }
  }, [level, history]);

  const resetPuzzle = () => {
    // Create a new puzzle based on the level
    const puzzleArray = Array.from({ length: level * level }, (_, index) => index + 1);
    setPuzzle(shuffleArray(puzzleArray));
  };

  const shuffleArray = (array) => {
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  
      const handleLevelChange = (newLevel) => {
        setLevel(newLevel);
      };


      const newGame = () => {
        setTimerActive(false);
        setMoves(0);
        setTime(0);
        setWin(false);
        window.location.reload();
      };

      const turn = () => {
        setTimerActive(true);
    };

    const set = () => {
        setText("Congratulations!!");
        setWin(true);
        setMoves(time)
        setTimerActive(false);
        setTimeout( () => {
            window.location.href ='/level10';
        }, 5000)
    };

    return (
    <div>
        <div className="float">
            <h4>Image</h4>
        <img src={img9} alt="Puzzle" className="pic" />
        </div>
        <div className="puzz puzz9" 
                onMouseEnter={turn}>
            <JigsawPuzzle
                imageSrc = {img9}
                rows={4}
                columns={4}
                onSolved={set}
                className="jigsaw-puzzle puzz9"
            />        
            </div>
            <div className="mann">
              <Timer time={time} timerActive={timerActive} setTime={setTime} />
          
            <p>Score: {moves}</p>
            <p>Level: 9</p>
          
          <Link to='/level8'><button onClick={() => handleLevelChange(level - 1)}>Previous Level</button></Link>
          <div className="px-6 mt-4">
            <button
              onClick={newGame}
              className="text-black font-bold block bg-gray-900 p-2 rounded w-full h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            >
              Restart
            </button>
          </div>
          <Link to='/level10'><button onClick={() => handleLevelChange(level + 1)}>Next Level</button></Link>
          
          </div>
          
          <h2 className="tag">{text}</h2>
    </div>
  )
}

export default Level9
