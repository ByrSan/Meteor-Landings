import React from "react"
import PropTypes from "prop-types"




const Navbar = ({icon, title}) => {
  
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  )
}

//Defualt Props
Navbar.defualtProps = {
  title: "Meteor Landings",
  icon: "fa fa-rocket",
}

//Typechecking Proptypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}
export default Navbar
{
  /* <h1 className=" fa fa-github github-nav"> Navbar</h1>    */
}
