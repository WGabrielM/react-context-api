import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { UsuarioContext } from "common/context/Usuario";

export default function Login() {
  const history = useHistory();
  // Utilizando o hook useContext torna mais performático
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type="text"
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/feira")}
      >
        Avançar
      </Button>
    </Container>
  );
}
