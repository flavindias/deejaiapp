import React from 'react';
import { Link } from 'react-router-dom';

const logoStyle = {
    height: '40px'
};

export default class Header extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} className={"navbar-brand mr-0 mr-md-2"} style={logoStyle} />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/app">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}