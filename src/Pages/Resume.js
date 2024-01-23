import React from 'react'
import "./resume.css"
import { MdMarkEmailRead } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { useState, useEffect } from "react"




const Resume = () => {
    useEffect(() => {
        document.title = "Dosh Portfolio | Resume";
    }, []);
    return (
        <div><div class="card text-start col-8 offset-2 my-3">

            <div class="card-body card-responsive">
                <h4 class="card-title row  ">
                    <h4 className="col-md-2 text-center m-auto h1 circle-container fw-bolder">OO</h4>
                    <h4 className="col-md-9 offset-sm-1  text-center my-2 fw-bolder"><h1>OLUWAYEMISI OLADOSU</h1>
                        <h4>FULL STACK DEVELOPER</h4><h5>(ReactJs || Django) </h5></h4>
                </h4>
                <hr />
                <p class="card-text row">
                    <div className="col-md-8 border-end">
                        <h3 className="mt-2 fw-bolder">RESUME OBJECTIVE</h3>
                        <hr />
                        <div className="">
                            <em className="pjustify">
                                To create innovative web solutions by combining front-end and back-end
                                development expertise, with a strong eagerness to contribute to solving
                                global problems and enhancing user experiences in a dynamic tech
                                environment.
                            </em>
                        </div>
                        <h3 className="mt-5 fw-bolder">EXPERIENCE</h3>
                        <hr />
                        <div >
                            <h4 className="mt-1 fw-bolder"><em>IT Professional</em></h4>
                            <h4 className="mt-1">Marzwell Schools / September 2021 - Present</h4>
                            <em className="pjustify">
                                ❖Collaborate with a team of developers, designers, and other
                                stakeholders, often participating in code reviews and knowledge
                                sharing. <br /> <br />
                                ❖ Monitor and analyze application performance, troubleshoot
                                issues, and communicate with other developers to make necessary
                                improvements.<br /> <br />
                                ❖ Stay updated on industry trends, emerging technologies, and best
                                practices to improve skills and stay current.<br /> <br />
                                ❖ Use version control systems like Git to track changes in the
                                codebase and collaborate with other developers.<br /> <br />
                                ❖ Develop server-side components, databases, and the application's
                                core logic using python and Django Rest Frame Work<br /> <br />
                            </em>
                            <h4 className="mt-1 fw-bolder"><em>System Support Officer</em></h4>
                            <h4 className="mt-1">i-Light Media / 2018 – 2020</h4>
                            <em className="pjustify">
                                ❖Implemented digital asset management for clients using Lightroom.<br /> <br />
                                ❖ Collaborated with front end development team by editing and optimizing
                                digital assets.<br /> <br />
                                ❖ Managed regular backup and restoration of database as necessary.<br /> <br />
                                ❖ Conducted testing of software developed in house.<br /> <br />
                            </em>
                        </div>

                    </div>
                    <div className="col-md-4">
                    <div className="Contact">
                    <h3 className="mt-2 fw-bolder">CONTACT</h3>
                    <hr />
                    <em><MdMarkEmailRead />:oladosuoluwayemisi@gmail.com</em> <br /> <br />
                    <em><MdCallEnd />: +2348029958684</em> <br /> <br />
                    <em><FaMapMarkerAlt />: 11, Afeez Sulu Road, 
Off Meiran Road, Abule-Egba, 
Lagos.</em>
                    </div>
                    <hr className="mt-4" />

                    <div className="itskills">
                    <h3 className="mt-2 fw-bolder text-center">IT SKILLS</h3>
                    <div className="text-center">
                    <FaCloudArrowDown size={50} />
                    </div>
                    <hr />
                    <h5 className="text-center fw-bolder">Front End Development 
Skills</h5>
<em>❖ HTML <br />
❖ CSS <br />
❖ Javascript <br />
❖ Bootstrap <br />
❖ jQuery <br />
❖ ReactJs</em>

<hr />
                    <h5 className="text-center fw-bolder">Back End Development 
Skills</h5>
<em>❖ MySQL Database <br />
❖ Python <br />
❖ Django Rest Frame 
Work</em>
                   
                    </div>
                    <hr />
                    <div className="education">
                        <h3 className="text-center fw-bolder">EDUCATION</h3>
                        <h5><em>BSc in Food Technology
</em></h5>
<h6><em>University of Ibadan</em></h6>
<h6><em>2009-2014</em></h6>
                    </div>
                    <hr />
                    <div className="certification">
                        <h3 className="text-center fw-bolder">CERTIFICATION</h3>
                        <h5><em>Full stack Web
Development
</em></h5>
<h6><em>Lagos State School of 
Programming (LASOP)
</em></h6>
<h6><em>May-December 2023</em></h6>
                    </div>
                    </div>
                    

                </p>
            </div>
        </div>
        </div>
    )
}

export default Resume