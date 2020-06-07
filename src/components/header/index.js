import React, {Component, Fragment} from 'react';
import { NavLink } from "react-router-dom";
import "../../style/header/header.scss";
import "antd/dist/antd.css";
import "antd/dist/antd";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-sm  d-flex align-content-center justify-content-between fixed-top px-5">
                    
                    <a className="navbar-brand " href="#">Logo</a>
                    <div className="d-flex justify-content-between">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div>
                                <NavLink to="/1" className="nav-link list-unstyled" activeClassName="underline_menu_port">Bosh sahifa</NavLink>
                                <span className="underline_menu"/>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div>
                                <NavLink to="/2" className="nav-link list-unstyled" activeClassName="underline_menu_port">Kurslar</NavLink>
                                <span className="underline_menu"></span>
                                </div>

                            </li>
                            <li className="nav-item">
                                <div>
                                <NavLink to="/3" className="nav-link list-unstyled" activeClassName="underline_menu_port">Biz haqimizda</NavLink>
                                <span className="underline_menu"></span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div>
                                <NavLink to="/4" className="nav-link list-unstyled" activeClassName="underline_menu_port">Hamkorlar</NavLink>
                                <span className="underline_menu"></span>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div>
                                <NavLink to="/5" className="nav-link list-unstyled" activeClassName="underline_menu_port">Aloqa</NavLink>
                                <span className="underline_menu"></span>
                                </div>
                            </li>
                        </ul>
                        <div className="d-flex  justify-content-center align-items-center">
                                <i className="fas fa-phone-volume fa-rotate-45"></i>
                            <span>
                                +998 91 134 77 73
                            </span>
                        </div>

                    </div>
                </nav>

            </Fragment>
        );
    }
}

export default Header;