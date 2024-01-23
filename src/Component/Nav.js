import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import {motion} from "framer-motion"

const Nav = () => {
    const [rotate, setRotate] = React.useState(false);
    const [rotate1, setRotate1] = React.useState(false);
    const [rotate2, setRotate2] = React.useState(false);
    const [rotate3, setRotate3] = React.useState(false);
    const [rotate4, setRotate4] = React.useState(false);

    const letterDropKeyframes = `
    @keyframes letterDrop {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;

    const letterStyle = (delay) => ({
        animation: `letterDrop 0.5s ease-in-out forwards`,
        animationDelay: `${delay}s`,
        display: 'inline-block',
    });
    
    return (
        <div>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-danger mw-100"
            >
                <div className="container-fluid">
                    <motion.div animate={{rotate: rotate ? 360: 0}} onClick={()=>{
                        setRotate(!rotate);
                    }}>
                        <Link className="navbar-brand nvlink" to="/">
                            <span style={letterStyle(0.1)}>D</span>
                            <span style={letterStyle(0.3)}>o</span>
                            <span style={letterStyle(0.5)}>s</span>
                            <span style={letterStyle(0.7)}>h</span>
                            <span style={letterStyle(0.9)}>_</span> {/* Add a space between words if needed */}
                            <span style={letterStyle(1.1)}>P</span>
                            <span style={letterStyle(1.3)}>o</span>
                            <span style={letterStyle(1.5)}>r</span>
                            <span style={letterStyle(1.7)}>t</span>
                            <span style={letterStyle(1.9)}>f</span>
                            <span style={letterStyle(2.2)}>o</span>
                            <span style={letterStyle(2.4)}>l</span>
                            <span style={letterStyle(2.6)}>i</span>
                            <span style={letterStyle(2.8)}>o</span>

                        </Link>
                    </motion.div>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <motion.li animate={{rotate: rotate1 ? 360: 0}} onClick={()=>{
                        setRotate1(!rotate1);
                    }} className="nav-item ">
                                <Link className="nav-link active ms-md-5 fs-5 text-white fw-bold change" to="/about_me" aria-current="page"
                                >About Me
                                    <span className="visually-hidden">(current)</span></Link>
                            </motion.li>
                            <motion.li animate={{rotate: rotate2 ? 360: 0}} onClick={()=>{
                        setRotate2(!rotate2);
                    }}className="nav-item fs-5">
                                <Link className="nav-link fs-5 ms-md-5 text-white fw-bold change" to="/my_skills">Skills</Link>
                            </motion.li>
                            <motion.li animate={{rotate: rotate3 ? 360: 0}} onClick={()=>{
                        setRotate3(!rotate3);
                    }} className="nav-item">
                                <Link className="nav-link fs-5 ms-md-5 text-white fw-bold change" to="/projects">Projects</Link>
                            </motion.li>

                            <motion.li animate={{rotate: rotate4 ? 360: 0}} onClick={()=>{
                        setRotate4(!rotate4);
                    }} className="nav-item">
                                <Link className="nav-link fs-5 ms-md-5 text-white fw-bold change" to="/my_resume">Resume</Link>
                            </motion.li>

                        </ul>

                    </div>
                </div>
                
            </nav>


        </div>
    )
}

export default Nav