import React from "react";

const PersonalInfo = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-step">
      <h3>Personal Information</h3>
      <label>Name</label>
      <input type="text" value={formData.name} onChange={handleChange("name")} />
      {errors.name && <span className="error">{errors.name}</span>}

      <label>Email</label>
      <input type="email" value={formData.email} onChange={handleChange("email")} />
      {errors.email && <span className="error">{errors.email}</span>}

      <label>Phone</label>
      <input type="text" value={formData.phone} onChange={handleChange("phone")} />
      {errors.phone && <span className="error">{errors.phone}</span>}
    </div>
  );
};

export default PersonalInfo;
