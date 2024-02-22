import React from 'react'
import "./Home.css";
import img from "./hero1.jpg"
import img2 from "./hero2.jpg"
import img3 from "./hero3.jpg"
import img4 from "./hero4.jpg"
import img5 from "./hero5.jpg"
import img6 from "./hero6.jpg"
import img7 from "./hero7.jpg"
import img8 from "./hero8.jpg"
import img9 from "./hero9.jpg"
import img10 from "./hero10.jpg"
import img11 from "./hero11.jpg"
import img12 from "./hero12.jpg"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const Home = () => {
  return (
    <div className='father'>
      <h2>Featured Puzzles</h2>
      <div className="grid">

        <Link to='/level1' className='game'>
            <img src={img} alt='Puzzle' />
            <p>
                <span>Level 1</span>
                <span>3 x 3</span>
            </p>
        </Link>

        <Link to='/level2' className='game'>
            <img src={img2} alt='Puzzle' />
            <p>
                <span>Level 2</span>
                <span>3 x 3</span>
            </p>
        </Link>

        <Link to='/level3' className='game'>
            <img src={img3} alt='Puzzle' />
            <p>
                <span>Level 3</span>
                <span>3 x 3</span>
            </p>
        </Link>

        <Link to='/level4' className='game'>
            <img src={img4} alt='Puzzle' />
            <p>
                <span>Level 4</span>
                <span>3 x 3</span>
            </p>
        </Link>

        <Link to='/level5' className='game'>
            <img src={img5} alt='Puzzle' />
            <p>
                <span>Level 5</span>
                <span>3 x 4</span>
            </p>
        </Link>

        <Link to='/level6' className='game'>
            <img src={img6} alt='Puzzle' />
            <p>
                <span>Level 6</span>
                <span>3 x 4</span>
            </p>
        </Link>

        <Link to='/level7' className='game'>
            <img src={img7} alt='Puzzle' />
            <p>
                <span>Level 7</span>
                <span>3 x 4</span>
            </p>
        </Link>

        <Link to='/level8' className='game'>
            <img src={img8} alt='Puzzle' />
            <p>
                <span>Level 8</span>
                <span>3 x 4</span>
            </p>
        </Link>

        <Link to='/level9' className='game'>
            <img src={img9} alt='Puzzle' />
            <p>
                <span>Level 9</span>
                <span>4 x 4</span>
            </p>
        </Link>

        <Link to='/level10' className='game'>
            <img src={img10} alt='Puzzle' />
            <p>
                <span>Level 10</span>
                <span>4 x 4</span>
            </p>
        </Link>

        <Link to='/level11' className='game'>
            <img src={img11} alt='Puzzle' />
            <p>
                <span>Level 11</span>
                <span>4 x 4</span>
            </p>
        </Link>

        <Link to='/level12' className='game'>
            <img src={img12} alt='Puzzle' />
            <p>
                <span>Level 12</span>
                <span>4 x 4</span>
            </p>
        </Link>
      </div>
    </div>
  )
}

export default Home
