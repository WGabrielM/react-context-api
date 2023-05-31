import React from "react";
import NavBar from "./NavBar";
import feira from "./feira.json";
import Produto from "components/Produto";
import { Container, Header, Lista } from "./styles";

export default function Feira() {
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá!</h2>
          <h3> Saldo: R$</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Produto {...produto} key={produto.id} />
        ))}
      </Lista>
    </Container>
  );
}
