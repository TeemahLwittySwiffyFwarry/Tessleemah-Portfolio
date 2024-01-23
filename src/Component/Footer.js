import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div>
    <div id="carouselExampleAutoplaying" className="carousel slide cbg border border-danger text-primary py-1 text-center mt-3" data-bs-ride="carousel">
    <h3 className="pb-1 mb-4 mt-1">Please Read!!!</h3>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <figure>
                    <blockquote className ="blockquote">
                        <p>Kindly, make sure you register your name to fill my form.</p>
                    </blockquote>
                    <figcaption className ="blockquote-footer">
                My name is <cite title="Source Title">Oluwayemisi Oladosu</cite>
                    </figcaption>
                </figure>
            </div>
            <div className="carousel-item">
            <figure>
                    <blockquote className ="blockquote">
                        <p>Constructive critism is welcome.</p>
                    </blockquote>
                    <figcaption className ="blockquote-footer">
                    My name is <cite title="Source Title">Oluwayemis Oladosu</cite>
                    </figcaption>
                </figure>
            </div>
            <div className="carousel-item">
            <figure>
                    <blockquote className ="blockquote">
                        <p>You can contact me on +2348029958684</p>
                    </blockquote>
                    <figcaption className ="blockquote-footer">
                        My name is <cite title="Source Title">Oluwayemisi Oladosu</cite>
                    </figcaption>
                </figure>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
      <li class="nav-item"><Link to="/about_me" class="nav-link px-2 text-body-secondary">Features</Link></li>
      <li class="nav-item"><Link to="/my_skills" class="nav-link px-2 text-body-secondary">Skills</Link></li>
      <li class="nav-item"><Link to="/my_resume" class="nav-link px-2 text-body-secondary">Resume</Link></li>
      <li class="nav-item"><Link to="/review" class="nav-link px-2 text-body-secondary">Review Result</Link></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
    </div>
  )
}

export default Footer