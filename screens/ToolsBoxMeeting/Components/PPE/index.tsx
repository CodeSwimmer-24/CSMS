import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import StepOne from "./Form/Step1";
import StepTwo from "./Form/Step2";

export default function PPECheckList() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", address: "" });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submitForm = () => console.log("Form Data:", formData);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1, height: "100%" }}>
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <StepThree
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
    </View>
  );
}
