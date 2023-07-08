import React from "react";
import "./Navbar.css";

const navbar = () => {
    return (

        <header id="header" class="header fixed-top">

            <div class="container-expand-md px-5 d-flex align-items-center justify-content-between">    
                <a href="" class="logo d-flex align-items-center">
                    <span>هور</span>
                </a>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto" href="">خدمات</a></li>
                        <li><a class="nav-link scrollto" href="">رزومه</a></li>
                        <li><a class="nav-link scrollto" href="">درباره ما</a></li>
                        <li><a class="nav-link scrollto active" href="">خانه</a></li>
                        <li><a class="nav-link scrollto" href="">تماس با ما</a></li>
                    </ul>    
                </nav> 
            </div> 

        </header>
    );
};

export default navbar;