import React from "react";

function Header() {
    return (
        <div>
            <header className="col-md-12">
                <nav id="siteNavBar" className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href=".//index.html">Mike Ruane</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">                    
                            <li><a href="#/portfolio">Portfolio</a></li>
                            <li><a href="#/contact">Contact</a></li>
                            <li><a href="#/">About</a></li>
                        </ul>
            
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://github.com/geotecdev" target="_blank" rel="nonreferrer"><span className="glyphicon glyphicon-cloud"></span> Github </a></li>
                            <li><a href="https://www.linkedin.com/in/mike-ruane-37820a84" target="_blank" rel="nonreferrer"><span className="glyphicon glyphicon-user"></span> Linkedin </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;