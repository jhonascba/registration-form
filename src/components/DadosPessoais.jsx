import { FormControlLabel, Switch, TextField, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErrors from "../hooks/useErros";

const DadosPessoais = ({ onSubmit }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validations = useContext(ValidacoesCadastro);
  const [errors, validateFields, nextStage] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nextStage()) {
          onSubmit({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="nome"
        type="text"
        label="Nome"
        name="nome"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={nome}
        error={!errors.nome.valid}
        helperText={errors.nome.message}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validateFields}
      />
      <TextField
        id="sobrenome"
        type="text"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={sobrenome}
        error={!errors.sobrenome.valid}
        helperText={errors.sobrenome.message}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        onBlur={validateFields}
      />
      <TextField
        id="cpf"
        type="text"
        label="CPF"
        name="cpf"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        error={!errors.cpf.valid}
        helperText={errors.cpf.message}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validateFields}
      />
      <FormControlLabel
        label="Promocoes"
        control={
          <Switch
            defaultChecked
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            defaultChecked
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />
      <Button type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  );
};

export default DadosPessoais;