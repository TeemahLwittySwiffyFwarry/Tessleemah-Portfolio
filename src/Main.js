import React from 'react';
import Home from "./Pages/Home";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import Aboutme from "./Pages/Aboutme";
import Resume from "./Pages/Resume"
import Skills from "./Pages/Skills"
import Comment from "./Pages/Comment"
import Projects from "./Pages/Projects"
import { Routes, Route } from 'react-router-dom';

const Main = () => {
  return (
    <div className="Main">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_me" element={<Aboutme />} />
        <Route path="/my_resume" element={<Resume />} />
        <Route path="/my_skills" element={<Skills />} />
        <Route path="/add_comment" element={<Comment />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add more Route components as needed */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default Main;
