import React, { useState } from "react";

const Confirmation = ({ formData }) => {
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setConfirmationMessage('Your form has been submitted successfully!');
  };
  return (
    <div className="form-step">
      <h3>Confirmation</h3>
      <ul>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone}</li>
        <li><strong>Address 1:</strong> {formData.address1}</li>
        <li><strong>Address 2:</strong> {formData.address2}</li>
        <li><strong>City:</strong> {formData.city}</li>
        <li><strong>State:</strong> {formData.state}</li>
        <li><strong>Zip Code:</strong> {formData.zipCode}</li>
      </ul>
      <button type="submit" onClick={handleSubmit} className="submit-button">
          Submit
        </button>

       
         {confirmationMessage && (
          <div className="confirmation-message">
            {confirmationMessage}
          </div>
        )}
    </div>
  );
};

export default Confirmation;
