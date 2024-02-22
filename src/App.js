import React, { useEffect, useState } from "react";
import "./App.css";
import "./puzzle.css";
import Header from "./Header";
import Home from "./Home";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Level6 from "./Level6";
import Level7 from "./Level7";
import Level8 from "./Level8";
import Level9 from "./Level9";
import Level10 from "./Level10";
import Level11 from "./Level11";
import Level12 from "./Level12";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
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
    if (level === 2) {
      history.push('/level2');
    }
  }, [history]);

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
    };
    

    return (
        <Router history={history}>
            <Header />
            <Routes>
            <Route path='/home' exact element={<Home />} />
              <Route path='/level1' element={<Level1 />} />
              <Route path='/level2' element={<Level2 />} />
              <Route path='/level3' element={<Level3 />} />
              <Route path='/level4' element={<Level4 />} />
              <Route path='/level5' element={<Level5 />} />
              <Route path='/level6' element={<Level6 />} />
              <Route path='/level7' element={<Level7 />} />
              <Route path='/level8' element={<Level8 />} />
              <Route path='/level9' element={<Level9 />} />
              <Route path='/level10' element={<Level10 />} />
              <Route path='/level11' element={<Level11 />} />
              <Route path='/level12' element={<Level12 />} />
            </Routes>
        </Router>
    );
}
 
export default App;