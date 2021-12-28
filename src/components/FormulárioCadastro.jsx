import { React, useEffect, useState } from "react";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import DadosPessoais from "./DadosPessoais";
import Endereco from "./Endereco";
import Login from "./Login";

const FormularioCadastro = ({ onSubmit }) => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (step === forms.length - 1) {
      onSubmit(userData);
    }
  });

  const collectData = (data) => {
    setUserData({ ...userData, ...data });
    nextForm();
  };

  const forms = [
    <Login onSubmit={collectData} />,
    <DadosPessoais onSubmit={collectData} />,
    <Endereco onSubmit={collectData} />,
    <Typography variant="h4" component="h1" sx={{padding: "30px"}}>Obrigado por se cadastrar!</Typography>,
  ];

  const nextForm = () => {
    setStep(step + 1);
  };

  return (
    <>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[step]}
    </>
  );
};

export default FormularioCadastro;
