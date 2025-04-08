import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BasicInfo({ addBasicData }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [errors, setErrors] = useState({});

     // Navigation function for programmatic routing
    const navigate = useNavigate();

    // Function to handle form submission
    const submit = (e) => {
        e.preventDefault();

        // Object to store error messages
        let validationErrors = {};

        // Basic validation
        if(!name) validationErrors.name = "Name is required!";
        if(!email) validationErrors.email = "Email is required!";
        else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = "Please enter a valid email!";

        if(!contact) validationErrors.contact = "Contact number is required";
        else if (!/^\d{10}$/.test(contact)) validationErrors.contact = "Please enter a valid 10-digit phone number!";

         // If there are any validation errors, show them
         if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
         } else {
            addBasicData(name, email, contact);
            navigate('/questions');
         }
    }

    return (
        <div className="container-fluid qform">
          <div className="col-md-6 m-auto">
            <div className="mt-3">
              <div className="card text-left h-100">
                <div className="card-body my-3">

                  <form onSubmit={submit}>
                    <label htmlFor="">
                      <h4>Basic Details</h4>
                    </label>

                    <div className="form-group my-3">
                      <label htmlFor="">
                        <b>1.</b> Name
                      </label>
                      {/* Input field for name */}
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        className={`form-control my-2 ${errors.name ? 'is-invalid' : ''}`}
                        placeholder='Enter your Name'
                        autoComplete='off'
                        maxLength="50"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="">
                        <b>2.</b> Email
                      </label>
                      {/* Input field for email */}
                      <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className={`form-control my-2 ${errors.email ? 'is-invalid' : ''}`}
                        placeholder='Enter your Email'
                        autoComplete='off'
                        maxLength="100"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="form-group my-3">
                      <label htmlFor="">
                        <b>3.</b> Contact No.
                      </label>
                      {/* Input field for contact number */}
                      <input
                        type="tel"
                        name='contact'
                        value={contact}
                        onChange={(e) => { setContact(e.target.value) }}
                        className={`form-control my-2 ${errors.contact ? 'is-invalid' : ''}`}
                        placeholder='Enter your Contact No.'
                        autoComplete='off'
                        maxLength="10"
                      />
                      {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                    </div>
                    
                    {/* Submit button */}
                    <button type='submit' className='btn btn-success mx-3'>Next</button>
                  </form>

                  {/* Step indicators */}
                  <center>
                    <span className="badge badge-pill bg-success"><b>1</b></span>
                    <span className="badge rounded-pill disabled">2</span>
                    <span className="badge rounded-pill disabled">3</span>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default BasicInfo;