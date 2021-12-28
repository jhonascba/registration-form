import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErrors from "../hooks/useErros";

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(ValidacoesCadastro);
  const [errors, validateFields, nextStage] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nextStage()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        type="email"
        id="email"
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={email}
        name="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        type="password"
        id="password"
        label="Senha"
        name="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={password}
        error={!errors.password.valid}
        helperText={errors.password.message}
        onBlur={validateFields}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default Login;
