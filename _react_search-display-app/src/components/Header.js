import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            title:"Display&Search-App",
            keyword:"Your text goes here!!!!"
        }

    }
    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            keyword:event.target.value?event.target.value:"Your text goes here!!!!"
        })
        this.props.userInput(event.target.value)
    }

  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                {this.state.title}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.handleChange}
                  />
                </form>
              </div>
            </div>
          </nav>
          <div style={{backgroundColor:"black",color:"white"}}>{this.state.keyword}</div>
          
        </div>
    )
  }
  
}
