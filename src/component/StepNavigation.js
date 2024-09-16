import React from "react";

const StepNavigation = ({ step, nextStep, prevStep }) => {
  return (
    <div className="step-navigation">
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 3 && <button onClick={nextStep}>Next</button>}
    </div>
  );
};

export default StepNavigation;
