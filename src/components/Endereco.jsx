import { Button, MenuItem, TextField, Box, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../contexts/ValidacoesCadastro";
import useErrors from "../hooks/useErros";

const Endereco = ({ onSubmit }) => {
  const estados = [
    {
      value: "Acre",
      label: "AC",
    },
    {
      value: "Alagoas",
      label: "AL",
    },
    {
      value: "Amapá",
      label: "AP",
    },
    {
      value: "Amazonas",
      label: "AM",
    },
    {
      value: "Bahia",
      label: "BA",
    },
    {
      value: "Ceará",
      label: "CE",
    },
    {
      value: "Distrito Federal",
      label: "DF",
    },
    {
      value: "Espírito Santo",
      label: "ES",
    },
    {
      value: "Goiás",
      label: "GO",
    },
    {
      value: "Maranhão",
      label: "MA",
    },
    {
      value: "Mato Grosso",
      label: "MT",
    },
    {
      value: "Mato Grosso do Sul",
      label: "MS",
    },
    {
      value: "Minas Gerais",
      label: "MG",
    },
    {
      value: "Pará",
      label: "PA",
    },
    {
      value: "Paraíba",
      label: "PB",
    },
    {
      value: "Paraná",
      label: "PR",
    },
    {
      value: "Pernambuco",
      label: "PE",
    },
    {
      value: "Piauí",
      label: "PI",
    },
    {
      value: "Rio de Janeiro",
      label: "RJ",
    },
    {
      value: "Rio Grande do Norte",
      label: "RN",
    },
    {
      value: "Rio Grande do Sul",
      label: "RS",
    },
    {
      value: "Rondônia",
      label: "RO",
    },
    {
      value: "Roraima",
      label: "RR",
    },
    {
      value: "Santa Catarina",
      label: "SC",
    },
    {
      value: "São Paulo",
      label: "SP",
    },
    {
      value: "Sergipe",
      label: "SE",
    },
    {
      value: "Tocantins",
      label: "TO",
    },
  ];

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const validations = useContext(ValidacoesCadastro);
  const [errors, validateFields, nextStage] = useErrors(validations);

  const handleChangeEstado = (event) => {
    setEstado(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nextStage()) {
          onSubmit({ cep, endereco, numero, estado, cidade });
        }
      }}
    >
      <Grid container direction="column">
        <TextField
          id="cep"
          type="number"
          label="CEP"
          name="cep"
          variant="outlined"
          margin="normal"
          required
          error={!errors.cep.valid}
          helperText={errors.cep.message}
          value={cep}
          onChange={(event) => {
            setCep(event.target.value);
          }}
          onBlur={validateFields}
        />
        <TextField
          id="endereco"
          type="text"
          label="Endereço"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={endereco}
          onChange={(event) => {
            setEndereco(event.target.value);
          }}
        />
        <TextField
          id="numero"
          type="number"
          label="Número"
          variant="outlined"
          margin="normal"
          required
          value={numero}
          onChange={(event) => {
            setNumero(event.target.value);
          }}
        />
        <Box
          component="div"
          sx={{
            "& .MuiTextField-root": {
              m: 0,
              width: "25ch",
              margin: "15px 0 8px 0",
            },
          }}
          required
        >
          <TextField
            id="estado"
            select
            label="Estado"
            value={estado}
            onChange={handleChangeEstado}
            required
          >
            {estados.map((option) => (
              <MenuItem key={option.value} value={option.value} required>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TextField
          id="cidade"
          type="text"
          label="Cidade"
          variant="outlined"
          margin="normal"
          required
          value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ width: "35%", m: "0 auto" }}
          type="submit"
        >
          Finalizar Cadastro
        </Button>
      </Grid>
    </form>
  );
};

export default Endereco;
