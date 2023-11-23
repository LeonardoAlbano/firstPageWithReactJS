// Importando o componente "Container" de um arquivo chamado "style"
import { Container, Links, Content } from "./style";

// Importando o componente "Header" do diretório "../../components/Header"
import { Header } from "../../components/Header";

// Importando o componente "Button" do diretório "../../components/Button"
import { Button } from "../../components/Button";

// Importando o componente "Section" do diretório "../../components/Section"
import { Section } from "../../components/Section";

// Importando o componente "Tag" do diretório "../../components/Tag"
import { Tag } from "../../components/Tag";

// Importando o componente "ButtonText" do diretório "../../components/ButtonText"
import { ButtonText } from "../../components/ButtonText";

// Definindo um componente funcional chamado "Details"
export function Details() {
  
  // Retornando JSX, que é uma extensão de sintaxe para JavaScript recomendada pelo React
  return (
    // Renderizando o componente "Container"
    <Container>
      {/* Renderizando o componente "Header" */}
      <Header />

      {/* Início da seção principal */}
      <main>
        {/* Renderizando o componente "Content" */}
        <Content>
          
          {/* Renderizando o componente "ButtonText" com o título "Excluir nota" */}
          <ButtonText title="Excluir nota" />

          {/* Título principal da seção */}
          <h1>
            Introdução ao React
          </h1>

          {/* Parágrafo principal com texto de exemplo */}
          <p>
            {/* Conteúdo do parágrafo */}
          </p>

          {/* Renderizando o componente "Section" com o título "Links úteis" */}
          <Section title="Links úteis">
            {/* Renderizando o componente "Links" dentro da seção */}
            <Links>
              {/* Item da lista de links */}
              <li>
                {/* Link dentro do item da lista */}
                <a href="#">Aulas Gravadas</a>
              </li>
              
              {/* Outro item da lista de links */}
              <li>
                {/* Outro link dentro do item da lista */}
                <a href="#">Material de Estudos</a>
              </li>
            </Links>
          </Section>

          {/* Renderizando o componente "Section" com o título "Marcadores" */}
          <Section title="Marcadores">
            {/* Renderizando o componente "Tag" com o título "expressJS" */}
            <Tag title="expressJS" />
            {/* Renderizando outro componente "Tag" com o título "NodeJS" */}
            <Tag title="NodeJS" />
          </Section>

          {/* Renderizando o componente "Button" com o título "Voltar" */}
          <Button title="Voltar"/>
          
        </Content> 
      </main>
      {/* Fim da seção principal */}
    </Container>
  );
}
