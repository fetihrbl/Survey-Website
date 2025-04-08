import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EnteredDetails({ data, questionData }) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Basic Info:", data);
    console.log("Question Responses:", questionData);

    setTimeout(() => {
      navigate('/thanks');
    }, 500);
  };

  // Obje kontrolü yapan yardımcı fonksiyon
  const renderValue = (value) => {
    if (value === null || value === undefined) return "N/A";
    if (typeof value === 'object') {
      // Eğer value bir dizi ise
      if (Array.isArray(value)) return value.join(', ');
      // Eğer value bir obje ise ve label property'si varsa
      if (value.label) return value.label;
      // Diğer durumlarda string'e çevir
      return JSON.stringify(value);
    }
    return value;
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h4>Entered Details</h4>

              {/* Temel bilgiler */}
              <p><strong>Name:</strong> {data?.name || "N/A"}</p>
              <p><strong>Email:</strong> {data?.email || "N/A"}</p>
              <p><strong>Contact No.:</strong> {data?.contact || "N/A"}</p>

              <h4>Responses</h4>

              <p><strong>Profession:</strong> {renderValue(questionData?.profession)}</p>
              <p><strong>Interests:</strong> {renderValue(questionData?.interest)}</p>
              <p><strong>Reference:</strong> {renderValue(questionData?.reference)}</p>

              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-success"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>

              <center className="mt-3">
                <span className="badge rounded-pill bg-secondary">1</span>
                <span className="badge rounded-pill bg-secondary">2</span>
                <span className="badge rounded-pill bg-success"><strong>3</strong></span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnteredDetails;