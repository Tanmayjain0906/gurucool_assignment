import React, { useState, useEffect } from "react";
import PersonalInfo from "./component/PersonalInfo";
import AddressInfo from "./component/AddressInfo";
import Confirmation from "./component/Confirmation";
import StepNavigation from "./component/StepNavigation";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const [errors, setErrors] = useState({});

  // Load data from local storage
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Move to next step with validation
  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Form validation logic
  const validateForm = () => {
    let tempErrors = {};
    switch (step) {
      case 1:
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Valid email is required";
        if (!formData.phone || formData.phone.length !== 10) tempErrors.phone = "Valid phone number is required";
        break;
      case 2:
        if (!formData.address1) tempErrors.address1 = "Address Line 1 is required";
        if (!formData.city) tempErrors.city = "City is required";
        if (!formData.state) tempErrors.state = "State is required";
        if (!formData.zipCode || formData.zipCode.length !== 6) tempErrors.zipCode = "Valid zip code is required";
        break;
      default:
        break;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form field changes
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  // Render steps based on current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} errors={errors} handleChange={handleChange} />;
      case 2:
        return <AddressInfo formData={formData} errors={errors} handleChange={handleChange} />;
      case 3:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Multi-Step Form</h2>
        {renderStep()}
        <StepNavigation step={step} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>

  );
};

export default App;
