import React from "react";

const AddressInfo = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-step">
      <h3>Address Information</h3>
      <label>Address Line 1</label>
      <input type="text" value={formData.address1} onChange={handleChange("address1")} />
      {errors.address1 && <span className="error">{errors.address1}</span>}

      <label>Address Line 2</label>
      <input type="text" value={formData.address2} onChange={handleChange("address2")} />

      <label>City</label>
      <input type="text" value={formData.city} onChange={handleChange("city")} />
      {errors.city && <span className="error">{errors.city}</span>}

      <label>State</label>
      <input type="text" value={formData.state} onChange={handleChange("state")} />
      {errors.state && <span className="error">{errors.state}</span>}

      <label>Zip Code</label>
      <input type="text" value={formData.zipCode} onChange={handleChange("zipCode")} />
      {errors.zipCode && <span className="error">{errors.zipCode}</span>}
    </div>
  );
};

export default AddressInfo;
