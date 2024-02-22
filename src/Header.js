import "./Header.css";
import Button from "./Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropsTypes from 'prop-types'

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className="header">
      <Link to='/home'><h2>{title}</h2></Link>
      <Button color="aqua" text="Share" onClick= {onClick} />
    </header>
  )
}

Header.defaultProps= {
  title: "Jigsaw Puzzle",
}

Header.propsTypes = {
  title: PropsTypes.string.isRequired,
}

export default Header
