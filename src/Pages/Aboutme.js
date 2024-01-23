import React from 'react'
import {Link} from "react-router-dom"
import { useState, useEffect } from "react"

import {motion} from "framer-motion"

const Aboutme = () => {
    useEffect(() => {
        document.title = "Dosh Portfolio | About Me";
    }, []);

    const [rotate, setRotate] = React.useState(false);
    return (
        <div>
            <div className="container">
                <button type="button"className="btn btn-md btn-primary mt-5">Click</button>
                <div class="card text-start mt-5 col-8 offset-2">
                    {/* <motion.div animate={{rotate: rotate ? 360: 0}} onClick={()=>{
                        setRotate(!rotate);
                    }} className="card-img-top row">
                        <img class="img-fluid col-md-4" src="./../../pics1.jpg" alt="Title" />
                        <img class="img-fluid col-md-4" src="./../../pics1.jpg" alt="Title" />
                        <img class="img-fluid col-md-4" src="./../../pics1.jpg" alt="Title" />
                    </motion.div> */}
                    <div class="card-body text-justify ">
                        <h4 class="card-title text-center mt-4 bg-danger">My Cover Letter</h4>
                        <motion.p initial={{y: -100}} animate={{y:[500,0]}} transition={{duration: "2", delay: "1"}} className="card-text text-break">My name is Oladosu, Oluwayemisi Tesleemah, and I'm excited to apply for the Full Stack Developer position at your company.
                            <br />
                            <br />

                            Hailing from West Africa, Nigeria, I am a graduate of the University of Ibadan, where I pursued my degree in the Faculty of Technology, specifically in the Department of Food Technology.
                            <br />
                            <br />

                            My passion for IT and web development has been a driving force in my life. However, the journey was not easy without a mentor. To enhance my skills, I invested my last savings in enrolling in a boot camp, which provided me with fundamental knowledge in HTML, CSS, JavaScript, Bootstrap, API, Git, and GitHub, React, MySQL, Python, and Django Rest Framework. The experience of learning in this boot camp has significantly deepened my understanding of coding.
                            <br />
                            <br />

                            Prior to this, I had attempted self-study for approximately a year, but I struggled to make meaningful progress. Joining the boot camp was a turning point for me, as it helped me bridge the gap between theory and practical application. Suddenly, the concepts and materials I had struggled with during self-study began to click into place.

                            <br />
                            <br />

                            I want to acknowledge that I don't assume automatic qualification for the position. It's important to me to convey that I am a dedicated individual actively working to establish myself as a full stack developer, especially given the increasing opportunities for female professionals in the industry. My journey in seeking a role in the tech sector has been marked by its challenges.
                            <br />
                            <br />

                            If granted the opportunity to work as a Full Stack Developer in your organization, I am committed to bringing my enthusiasm and dedication to the team. I have always been known as a positive, uplifting team member who fosters a collaborative and productive atmosphere. I firmly believe in the power of a positive attitude and am confident that my energy and willingness to learn will not only contribute to the team's success but also make a lasting impact.
                            <br />
                            <br />

                            I am eager to be a part of your organization and contribute my web development skills and passion to your team. Thank you for considering my application, and I look forward to the possibility of joining your organization as a Full Stack Developer.
                            <br />
                            <br />

                            Warm regards,
                            <br />
                            Oladosu, Oluwayemisi Tesleemah</motion.p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutme