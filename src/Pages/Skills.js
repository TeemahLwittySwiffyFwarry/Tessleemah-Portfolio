import React from 'react'
import { useState, useEffect } from "react"
import "./skills.css"
import { LuAmpersand } from "react-icons/lu";
import Typed from "react-typed"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"


const Skills = () => {
  useEffect(() => {
    document.title = "Dosh Portfolio | My Skills";
  }, []);

  return (
    <div className="Skills container">

      <h4 className="my-4 text-start animated-typing"><Typed
        strings={["The skills acquired are stated below:",
        ]}
        typeSpeed={150}
        backSpeed={0}
        loop
      /></h4>
      <div className="feorbe row my-4 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1">
        <div className="col-md-4 scrollto active" data-toggle="collapse" aria-expanded="true" aria-controls="section1" to="#section1">
          <motion.div initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 4 }}
            transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

            whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="card">

            <div className="card text-start">

              <div className="card-body">
                <img className="card-img-top" src=".././frontend.jpg" alt="Title" />
                <h4 className="card-title offset-2"><br /><br />Front-End Development <br /><br /> </h4>

              </div>
            </div>


          </motion.div>
        </div>
        <div className="col-md-4 my-4">
          <div className="card text-start">

            <div className="card-body">
              <div className='offset-3 my-5'>
                < LuAmpersand size={180} />
              </div>


            </div>
          </div>

        </div>
        <div className="col-md-4">
          <motion.div initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 4 }}
            transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

            whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
            whileTap={{ scale: 0.95 }}>
            <div className="card text-start">

              <div className="card-body">
                <img className="card-img-top img-fluid mt-3" src=".././backend3.jpg" alt="Title" />
                <h4 className="card-title offset-2"><br /><br />Back-End Development <br /><br /> </h4>

              </div>
            </div>
          </motion.div>

          <br /><br /><br />





        </div>

        <div className="FRONTend my-4">
          <h4 className="my-4 text-start animated-typing"><Typed
            strings={["The front end skills are as follows:",
            ]}
            typeSpeed={150}
            backSpeed={0}

            loop
          /></h4>

          <div className="row" id="section1">
            <div className="col-md-4 my-2">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././html.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={90} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-danger" style={{ width: `${90}%` }}>
                        {`${90}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            <div className="col-md-4 my-2">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height" src=".././css.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={75} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{ width: `${75}%` }}>
                        {`${75}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            <div className="col-md-4 my-2">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././javascript.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={70} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{ width: `${70}%` }}>
                        {`${70}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>

            <div className="col-md-4 my-4">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././jquery.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={70} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{ width: `${70}%` }}>
                        {`${70}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            <div className="col-md-4 my-4">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././bootstrap.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={70} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{ width: `${70}%` }}>
                        {`${70}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            <div className="col-md-4 my-4">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././favicon.ico" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={70} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{ width: `${70}%` }}>
                        {`${70}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            

          </div>
        </div>

        <div className="backend my-4">
          <h4 className="my-4 text-start animated-typing"><Typed
            strings={["The back end skills are as follows:",
            ]}
            typeSpeed={150}
            backSpeed={0}

            loop
          /></h4>

          <div className="row" id="section1">
            <div className="col-md-4 my-2">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././sql.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={90} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-danger" style={{ width: `${90}%` }}>
                        {`${90}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            <div className="col-md-4 my-2">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height" src=".././python.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={75} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-primary" style={{ width: `${75}%` }}>
                        {`${75}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            <div className="col-md-4 my-2">
              <motion.div initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 4 }}
                transition={{ yoyo: Infinity, duration: 10, ease: 'easeInOut' }}

                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: '0px 10px 40px rgba(255, 0, 0, 0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="card">

                <div className="card text-start">

                  <div className="card-body">
                    <img className="card-img-top img-thumbnail img-fluid img-height " src=".././django.png" alt="Title" />
                    <h4 className="card-title fw-bolder  offset-1"><br /><div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={70} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar bg-warning" style={{ width: `${70}%` }}>
                        {`${70}%`}
                      </div>
                    </div></h4>

                  </div>
                </div>


              </motion.div>
            </div>
            

          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4 offset-md-1 col-10 offset-1 bg-primary rounded rounded-5 p-2 p-md-4 m-auto my-2">
          <h5>Click here to add comment</h5>
          <Link to="/add_comment"><button type="button" className="btn btn-danger my-3" data-bs-toggle="" data-bs-target="">
            Click</button></Link>
        </div>
        <div className="col-md-4 offset-md-1 col-10 offset-1 bg-warning rounded rounded-5 p-2 p-md-4 m-auto my-2">
          <h5>Click here to check review</h5>
          <Link to="/add_comment"><button type="button" className="btn btn-danger my-3" data-bs-toggle="" data-bs-target="">
            Click</button></Link>
        </div>
      </div>




    </div>
  )
}

export default Skills