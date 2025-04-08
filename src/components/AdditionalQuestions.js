import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdditionalQuestions({ addQuestionData }) {

    const [profession, setProfession] = useState("");
    const [interest, setInterest] = useState("");
    const [reference, setReference] = useState("");
    const [otherProfession, setOtherProfession] = useState("");
    const [otherInterest, setOtherInterest] = useState("");
    const [otherReference, setOtherReference] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Helper function to handle the 'Others' validation
    const validateOthers = (value, otherValue) => {
        if(value === "Others" && !otherValue.trim()) {
            setError("Please provide a valid response for 'Others'.");
            return false;
        } 
        return true
    };

    //Function to handle form submission
    const submit = (e) => {
        e.preventDefault();
        setError("");
    
        if (!profession || !interest || !reference) {
            setError("All fields are necessary!");
            return;
        }
    
        if (
            !validateOthers(profession, otherProfession) ||
            !validateOthers(interest, otherInterest) ||
            !validateOthers(reference, otherReference)
        ) {
            return;
        }
    
        const finalProfession = profession === "Others" ? otherProfession : profession;
        const finalInterest = interest === "Others" ? otherInterest : interest;
        const finalReference = reference === "Others" ? otherReference : reference;
    
        addQuestionData({
            profession: finalProfession,
            interest: finalInterest,
            reference: finalReference,
        });
    
        navigate('/details');
    };

    // Event handler for changes in the profession radio buttons
    const handleProfessionChange = (e) => {
        setProfession(e.target.value);
    }

    // Event handler for changes in the interest radio buttons
    const handleInterestChange = (e) => {
        setInterest(e.target.value);
    }

    // Event handler for changes in the interest radio buttons
    const handleReferenceChange = (e) => {
        setReference(e.target.value);
    }



    return (
        <div className="container-fluid qform">
          <div className="col-md-5 m-auto">
            <div className="mt-3">
              <div className="card text-left h-100">
                <div className="card-body">
                  <form onSubmit={submit}>
                    <label>
                      <h4>Additional Questions</h4>
                    </label>
    
                    {error && <div className="alert alert-danger">{error}</div>}
    
                    {/* Profession */}
                    <div className="form-group m-2">
                      <label>
                        <b>1.</b> What is your profession?
                      </label>
                      <br />
                      {["Student", "Software Engineer", "Teacher", "Others"].map((option) => (
                        <div key={option}>
                          <input
                            type="radio"
                            name="ProfessionRadio"
                            value={option}
                            checked={profession === option}
                            onChange={(e) => setProfession(e.target.value)}
                            className="m-2"
                          />
                          <label>{option === "Others" ? " Others:" : ` ${option}`}</label>
                          {option === "Others" && (
                            <input
                              type="text"
                              className="form-control m-2"
                              value={otherProfession}
                              onChange={(e) => setOtherProfession(e.target.value)}
                              disabled={profession !== "Others"}
                            />
                          )}
                        </div>
                      ))}
                      <hr />
                    </div>
    
                    {/* Interest */}
                    <div className="form-group m-2">
                      <label>
                        <b>2.</b> What are your interests?
                      </label>
                      <br />
                      {["DSA", "Full Stack Development", "Data Science", "Competitive Programming", "Others"].map((option) => (
                        <div key={option}>
                          <input
                            type="radio"
                            name="interestRadio"
                            value={option}
                            checked={interest === option}
                            onChange={(e) => setInterest(e.target.value)}
                            className="m-2"
                          />
                          <label>{option === "Others" ? " Others:" : ` ${option}`}</label>
                          {option === "Others" && (
                            <input
                              type="text"
                              className="form-control m-2"
                              value={otherInterest}
                              onChange={(e) => setOtherInterest(e.target.value)}
                              disabled={interest !== "Others"}
                            />
                          )}
                        </div>
                      ))}
                      <hr />
                    </div>
    
                    {/* Reference */}
                    <div className="form-group m-2">
                      <label>
                        <b>3.</b> Where did you hear about us?
                      </label>
                      <br />
                      {["News Paper", "LinkedIn", "Instagram", "Others"].map((option) => (
                        <div key={option}>
                          <input
                            type="radio"
                            name="referenceRadio"
                            value={option}
                            checked={reference === option}
                            onChange={(e) => setReference(e.target.value)}
                            className="m-2"
                          />
                          <label>{option === "Others" ? " Others:" : ` ${option}`}</label>
                          {option === "Others" && (
                            <input
                              type="text"
                              className="form-control m-2"
                              value={otherReference}
                              onChange={(e) => setOtherReference(e.target.value)}
                              disabled={reference !== "Others"}
                            />
                          )}
                        </div>
                      ))}
                    </div>
    
                    {/* Submit */}
                    <button type="submit" className="btn btn-success mx-3">
                      Next
                    </button>
                  </form>
    
                  {/* Progress */}
                  <center className="mt-3">
                    <span className="badge rounded-pill disabled">1</span>
                    <span className="badge badge-pill bg-success"><b>2</b></span>
                    <span className="badge rounded-pill disabled">3</span>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default AdditionalQuestions;