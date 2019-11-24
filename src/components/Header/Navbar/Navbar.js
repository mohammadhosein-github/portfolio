
import React, { Component } from 'react';

class theNavbar extends Component{

  constructor(props) {
    super(props);
    this.state = {isOpen: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  render(){
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="my-navbar">
        <p className="navbar-brand">
        </p>
        <button
          onClick={this.handleClick}
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.isOpen ? "collapse navbar-collapse my-show" : "collapse navbar-collapse"} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                خانه 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                پروژه&zwnj;های من
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                درباره من
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                تماس با من
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// function theNavbar() {

//     const [isOpen, setOpen] = useState(false);

//     const openNavbar = () => {
//       setOpen(!isOpen);
//     }
    
    
// }

export default theNavbar;