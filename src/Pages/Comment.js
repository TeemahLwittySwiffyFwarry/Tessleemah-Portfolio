import React from 'react';

const Comment = () => {
  return (
    <div className="comment container">
      <div className="card text-start my-4 col-10 offset-1 col-md-6 offset-md-3" style={{ transform: 'perspective(1000px) rotateX(30deg)', boxShadow: '5px 15px 20px rgba(0, 0, 0, 1)' }}>
        <div className="card-body">
          <h4 className="card-title text-center text-danger">Review Me</h4>
          <p className="card-text">
            <div className="mb-3 row">
              <label htmlFor="name" className="col-md-3 col-form-label">
                Name
              </label>\
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value=""
                  onChange=""
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="purpose" className="col-md-3 col-form-label">
                Purpose
              </label>
              <select
                className="form-select form-select-md col-md-9 w-50 ms-3 ps-2"
                name=""
                id=""
              >
                <option selected>Select one</option>
                <option value="Internship">Internship</option>
                <option value="Junior">Junior Developer Role</option>
                <option value="Site_seeing">Site Seeing</option>
              </select>
            </div>
            <div className="mb-3 row">
              <label htmlFor="purpose" className="col-md-3 col-form-label">
                What aspect should i work on?
              </label>
              <select
                className="form-select form-select-md col-md-9 w-50 ms-3 ps-2"
                name=""
                id=""
              >
                <option selected>Select one</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascripts">Javascripts</option>
                <option value="react">React</option>
                <option value="responsiveness">Responsiveness</option>
                <option value="colour_combination">Colour Combination</option>
              </select>
            </div>
            <div className="mb-3 row">
              <label htmlFor="references" className="col-md-3 col-form-label">
                Comment
              </label>
              <div className="col-md-9">
                <textarea
                  className="form-control"
                  id="references"
                  name="add_references"
                  value=""
                  onChange=""
                  placeholder=""
                />
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
