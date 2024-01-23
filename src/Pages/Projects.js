import React from 'react'
import { useState, useEffect } from "react"
import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa6";

const Projects = () => {
    useEffect(() => {
        document.title = "Dosh Portfolio | My Projects";
    }, []);
    return (
        <div className="projects container">
            <div className='the my-4 container bg-danger-subtle rounded rounded-3'><h2>Receipt Management System</h2></div>
            <div className="receipts my-4 row ">
                <div className="col-md-3 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
                    <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 4 }}
                        transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                        whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        className="card">

                        <div className="card text-start">

                            <div className="card-body">
                                <img className="card-img-top" src=".././receipt.png" alt="Title" />
                                <h4 className="card-title offset-4"><br /><br />Receipt <br /><br /> </h4>

                            </div>
                        </div>


                    </motion.div>
                </div>
                <div className="arrow col-md-1 my-4">
                    <br />
                    <br />
                    <br />
                    <br />
                    <FaArrowRight size={50} color='red' />
                </div>
                <div className="col-md-3 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
                    <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 4 }}
                        transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                        whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        className="card">

                        <div className="card text-start">

                            <div className="card-body">
                                <img className="card-img-top" src=".././summary.png" alt="Title" />
                                <p className="card-title">This is a school receipt which comes in four categories:
                                
                                <br />
                                <br />
                                <FaHandPointRight /> Tuition
                                <br />
                                <FaHandPointRight /> Stationery
                                <br />
                                <FaHandPointRight /> Transport
                                <br />
                                <FaHandPointRight /> Co-corricular
                                <br />

                                <br />

                                The video is positioned on the right-hand side, offering further explanation.


                                </p>

                            </div>
                        </div>


                    </motion.div>
                </div>

                <div className="arrow col-md-1 my-4">
                    <br />
                    <br />
                    <br />
                    <br />
                    <FaArrowRight size={50} color='red' />
                </div>

                <div className="col-md-4 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
                    <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 4 }}
                        transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                        whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        className="card">

                        <div className="card text-start">

                            <div className="card-body">
                                <img className="card-img-top" src=".././summary.png" alt="Title" />
                                <h4 className="card-title"><video width="300" height="auto" controls>
                                                    <source src=".././receiptvid.mp4" type="video/mp4"/>
                                                    </video></h4>

                            </div>
                        </div>


                    </motion.div>
                </div>


            </div>

            <div className='the my-5 container bg-danger-subtle rounded rounded-3'><h2>Learning Management System</h2></div>
            <div className="receipts my-4 row ">
                <div className="col-md-3 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
                    <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 4 }}
                        transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                        whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        className="card">

                        <div className="card text-start">

                            <div className="card-body">
                                <img className="card-img-top" src=".././lms.png" alt="Title" />
                                <h4 className="card-title offset-4"><br /><br />Receipt <br /><br /> </h4>

                            </div>
                        </div>


                    </motion.div>
                </div>
                <div className="arrow col-md-1 my-4">
                    <br />
                    <br />
                    <br />
                    <br />
                    <FaArrowRight size={50} color='red' />
                </div>
                <div className="col-md-3 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
                    <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 4 }}
                        transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                        whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        className="card">

                        <div className="card text-start">

                            <div className="card-body">
                                <img className="card-img-top" src=".././summary.png" alt="Title" />
                                <p className="card-title">This is a hyb:
                                
                                <br />
                                <br />
                                <FaHandPointRight /> Tuition 
                                <br />
                                <FaHandPointRight /> Stationery
                                <br />
                                <FaHandPointRight /> Transport
                                <br />
                                <FaHandPointRight /> Co-corricular
                                <br />

                                <br />

                                The video is positioned on the right-hand side, offering further explanation.


                                </p>

                            </div>
                        </div>


                    </motion.div>
                </div>

                <div className="arrow col-md-1 my-4">
                    <br />
                    <br />
                    <br />
                    <br />
                    <FaArrowRight size={50} color='red' />
                </div>

                <div className="col-md-4 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
                    <motion.div initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 4 }}
                        transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                        whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                        whileTap={{ scale: 0.95 }}
                        className="card">

                        <div className="card text-start">

                            <div className="card-body">
                                <img className="card-img-top" src=".././summary.png" alt="Title" />
                                <h4 className="card-title"><video width="300" height="auto" controls>
                                                    <source src=".././receiptvid.mp4" type="video/mp4"/>
                                                    </video></h4>

                            </div>
                        </div>


                    </motion.div>
                </div>


            </div>

        </div>
    )
}

export default Projects