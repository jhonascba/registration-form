import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "./App.css";
import FormularioCadastro from "./components/FormulárioCadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validateCep, validateCpf, validateNome, validateSobrenome, validatePassword } from "./models/validations";

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ password: validatePassword, nome: validateNome, sobrenome:  validateSobrenome, cpf: validateCpf, cep: validateCep }}
      >
        <FormularioCadastro onSubmit={onSubmitForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

const onSubmitForm = (data) => {
  console.log(data);
};

export default App;