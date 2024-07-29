import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <>
      <div className="container d-flex justify-content-between gap-5 mt-5">
        {/* get in touch */}
        <div>
          <h1>Get in touch</h1>
          <p>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">E mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="email@example.com"
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Message</label>
            <textarea
              className="form-control"
              placeholder="Message..."
              readOnly
            ></textarea>
          </div>
          <button type="submit" className="bg-dark text-light">
            Submit
          </button>
        </div>
        {/* contact details*/}
        <div>
          <h1>Contact information</h1>
          <p>Reach out to us directly.</p>
          <h4 className="">📨 example@gmail.com</h4>
          <h4>📞+91 1234567890</h4>
          <h4></h4>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
