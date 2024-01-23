import React, { useEffect } from 'react';
import "./home.css";
import { FaReact } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Typed from "react-typed"




const Home = () => {
    useEffect(() => {
        document.title = "Dosh Portfolio | Home";
    }, []);

    return (
        <div className="container">
            <div className="banner">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column justify-content-even border-end border-start">
                        <div className="white text-danger motivation h1 mt-5 animated-typing">
                            <Typed
                                strings={["Meet The Aspiring Best Female Developer",
                                ]}
                                typeSpeed={150}
                                backSpeed={0}
                                loop
                            />
                        </div>
                        <div className="mt-5 h1">React.Js <FaReact /> || Django <TbBrandDjango /></div>
                        <br />
                        <div className="white text-danger motivation h1 mt-5 animated-typing">
                            <Typed
                                strings={["A Full-Stack Developer",
                                ]}
                                typeSpeed={150}
                                backSpeed={0}
                                loop
                            /></div>
                    </div>
                    <div className="col-md-2">
                        <img src="./../../Pics1.jpeg" alt="" className="img-fluid myimg my-5" />
                    </div>
                    <div className="col-md-5 border-end border-start">
                        <div className="white text-danger motivation h1 my-5">
                            My name is Oluwayemisi Tesleemah <br />
                            <em className="h2 text-secondary mt-5">Click here to know more about me</em>
                        </div>
                        <div>
                            <button className="btn btn-dark border border-black my-5"><FaArrowAltCircleDown size={100} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
