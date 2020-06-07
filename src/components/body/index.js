import React, {Component, Fragment} from 'react';
import {Carousel} from 'antd';
import DrawTitle__ from "../body/drawTitle__";
import {NavLink} from "react-router-dom";
import ButtonStyled from "./buttonStyled";
import "../../style/body/body.scss"
import {DesktopOutlined, HeartOutlined} from "@ant-design/icons";

class Body extends Component {
    render() {
        return (
            <Fragment>
                <div className="header_carousel ">
                    <div className="messengers">
                        <ul>
                            <li><i className="fab fa-facebook-f"/></li>
                            <li><i className="fab fa-instagram"/></li>
                            <li><i className="fab fa-telegram-plane"/></li>
                            <li><i className="fab fa-youtube"/></li>
                        </ul>
                    </div>
                    <Carousel autoplay>
                        <div className="slide-item backend">
                            <div className="box">
                                <div className="title">
                                    <span className="first_title">BACKEND </span><br/>
                                    <span className="second_title">DEVELOPMENT</span>
                                </div>
                                <div className="language_box">
                                    <p>PHP , MySQL , Python , Django , Yii , Node.Js , Java</p>
                                </div>
                                <div className="more">
                                    <button className=""><span>BATAFSIL</span></button>
                            </div>
                            </div>
                        </div>
                        <div className="slide-item mobile">
                            <div className="box">
                                    <div className="container">
                                <div className="title">
                                    <span className="first_title">MOBILE </span><br/>
                                    <span className="second_title">DEVELOPMENT</span>
                                </div>
                                <div className="language_box">
                                    <p>JAVA , Kotlin , Objective C , Swift</p>
                                </div>
                                <div className="more">
                                    <button className=""><span>BATAFSIL</span></button>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="slide-item system">
                            <div className="box">
                                <div className="container">
                                <div className="title">
                                    <span className="first_title">SYSTEM </span><br/>
                                    <span className="second_title">DEVELOPMENT</span>
                                </div>
                                <div className="language_box">
                                    <p>Linux Server , Windows Server , LAMP , NGNIX , Apache</p>
                                </div>
                                <div className="more">
                                    <button className=""><span>BATAFSIL</span></button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className="our_curs">
                    <div className="container">
                        <div className="header">
                            <DrawTitle__ first="Bizning" second="kurslar"/>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <div>
                                            <NavLink to="/5" className="nav-link list-unstyled" activeClassName="underline_menu_port">Barchasi</NavLink>
                                            <span className="underline_menu"></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <NavLink to="/1" className="nav-link list-unstyled" activeClassName="underline_menu_port">Dasturlash</NavLink>
                                            <span className="underline_menu"></span>
                                        </div>

                                    </li>
                                    <li>
                                        <div>
                                            <NavLink to="/8" className="nav-link list-unstyled" activeClassName="underline_menu_port">Tayyorlov kurslari</NavLink>
                                            <span className="underline_menu"></span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="pagination-arrows">
                                    <li className="icon icon-arrow-left rotate-180"/>
                                    <li className="icon icon-arrow-right"/>
                                </ul>
                            </div>
                        </div>
                       <Carousel element="our_curs_box"  />
                    <div className="our_curs_box">
                        <div className="content_item">
                            <div className="hear_icon">
                                <button>
                                <HeartOutlined/>
                                </button>
                            </div>
                            <div className="content_img">
                                <div className="img_box">
                                    <DesktopOutlined/>
                                </div>
                            </div>
                            <div className="content_title">
                                <h2>Frontend development</h2>
                            </div>
                            <div className="content_info">
                                <div className="box_keys">
                                    <ul className="m-0 p-0">
                                        <li><span>Dars vaqti</span></li>
                                        <li><span>Davomiyligi</span></li>
                                        <li><span>Narxi</span></li>
                                        <li><span>Dars kunlari</span></li>
                                    </ul>
                                </div>
                                <div className="box_values">
                                    <ul className="m-0 p-0">
                                        <li><span>2 soat</span></li>
                                        <li><span>4 oy</span></li>
                                        <li><span>400 000</span></li>
                                        <li><span>Du-Se-Cho</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content_btn">
                                <ButtonStyled value="Ro`yxatdan o`tish" />
                            </div>
                        </div>
                        <div className="content_item">
                            <div className="hear_icon">
                                <button>
                                    <HeartOutlined/>
                                </button>
                            </div>
                            <div className="content_img">
                                <div className="img_box">
                                    <DesktopOutlined/>
                                </div>
                            </div>
                            <div className="content_title">
                                <h2>Frontend development</h2>
                            </div>
                            <div className="content_info">
                                <div className="box_keys">
                                    <ul className="m-0 p-0">
                                        <li><span>Dars vaqti</span></li>
                                        <li><span>Davomiyligi</span></li>
                                        <li><span>Narxi</span></li>
                                        <li><span>Dars kunlari</span></li>
                                    </ul>
                                </div>
                                <div className="box_values">
                                    <ul className="m-0 p-0">
                                        <li><span>2 soat</span></li>
                                        <li><span>4 oy</span></li>
                                        <li><span>400 000</span></li>
                                        <li><span>Du-Se-Cho</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content_btn">
                                <ButtonStyled value="Ro`yxatdan o`tish" />
                            </div>
                        </div>
                        <div className="content_item">
                            <div className="hear_icon">
                                <button>
                                    <HeartOutlined/>
                                </button>
                            </div>
                            <div className="content_img">
                                <div className="img_box">
                                    <DesktopOutlined/>
                                </div>
                            </div>
                            <div className="content_title">
                                <h2>Frontend development</h2>
                            </div>
                            <div className="content_info">
                                <div className="box_keys">
                                    <ul className="m-0 p-0">
                                        <li><span>Dars vaqti</span></li>
                                        <li><span>Davomiyligi</span></li>
                                        <li><span>Narxi</span></li>
                                        <li><span>Dars kunlari</span></li>
                                    </ul>
                                </div>
                                <div className="box_values">
                                    <ul className="m-0 p-0">
                                        <li><span>2 soat</span></li>
                                        <li><span>4 oy</span></li>
                                        <li><span>400 000</span></li>
                                        <li><span>Du-Se-Cho</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content_btn">
                                <ButtonStyled value="Ro`yxatdan o`tish" />
                            </div>
                        </div>
                        <div className="content_item">
                            <div className="hear_icon">
                                <button>
                                    <HeartOutlined/>
                                </button>
                            </div>
                            <div className="content_img">
                                <div className="img_box">
                                    <DesktopOutlined/>
                                </div>
                            </div>
                            <div className="content_title">
                                <h2>Frontend development</h2>
                            </div>
                            <div className="content_info">
                                <div className="box_keys">
                                    <ul className="m-0 p-0">
                                        <li><span>Dars vaqti</span></li>
                                        <li><span>Davomiyligi</span></li>
                                        <li><span>Narxi</span></li>
                                        <li><span>Dars kunlari</span></li>
                                    </ul>
                                </div>
                                <div className="box_values">
                                    <ul className="m-0 p-0">
                                        <li><span>2 soat</span></li>
                                        <li><span>4 oy</span></li>
                                        <li><span>400 000</span></li>
                                        <li><span>Du-Se-Cho</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content_btn">
                                <ButtonStyled value="Ro`yxatdan o`tish" />
                            </div>
                        </div>


                    </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Body;