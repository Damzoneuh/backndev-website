import React, {Component} from 'react';
import pathLogo from '../../img/Logo_BnD-neg.png';
import 'material-icons/iconfont/material-icons.scss';
import '../../sass/navbar.scss';

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        };

        this.handleDropDown = this.handleDropDown.bind(this)
    }

    handleDropDown(){
        if (this.state.dropdown){
            this.setState({
                dropdown: false
            });
        }
        else {
            this.setState({
                dropdown: true
            });
        }
    }

    render() {
        return(
            <nav className="nav dark-blue navbar-expand-lg justify-content-between align-items-center">
                <a  href="#" onClick={this.handleDropDown} className="d-block position-relative"><i className="material-icons text-white md-48 font-3">menu</i></a>
                {this.state.dropdown ? <div className="nav-menu position-absolute dark-blue">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link dropdown-link" href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-link" href="#">Espace recruteur</a>
                        </li>
                    </ul>
                </div> : '' }
                <a className="navbar-brand" href="#">
                    <img src={pathLogo} alt="logo back'n dev"/>
                </a>
            </nav>
        )
    }
}