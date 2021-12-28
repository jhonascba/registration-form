import { isValid } from "cpf";

const validatePassword = (password) => {
  if (password.length < 4 || password.length > 12) {
    return { valid: false, message: "Senha deve ter entre 4 e 12 dígitos" };
  }
  return { valid: true, message: "" };
};

const validateNome = (nome) => {
  if (nome.length < 2 || typeof nome !== 'string') {
    return { valid: false, message: "Valor inválido!" };
  }
  return { valid: true, message: "" };
};

const validateSobrenome = (nome) => {
  if (nome.length < 2 || typeof nome !== 'string') {
    return { valid: false, message: "Valor inválido!" };
  }
  return { valid: true, message: "" };
};

const validateCpf = (cpf) => {
  const result = isValid(cpf);
  if (result === false) {
    return { valid: false, message: "CPF inválido!" };
  }
  return { valid: true, message: "" };
};

const validateCep = (cep) => {
  if (cep.length < 8 || cep.length > 8) {
    return { valid: false, message: "CEP inválido!" };
  }
  return { valid: true, message: "" };
};

export {validatePassword, validateNome, validateCpf, validateCep, validateSobrenome}