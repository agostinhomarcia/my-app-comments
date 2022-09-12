import React, { useState } from "react";
import "./App.css";
import Image from "./img/people.svg";
import {Button, Container, List} from "./styles";



function App() {
  
  const [comments, setComments] = useState()
  const [alltTheComments, setalltTheComments ] = useState([])


  function typedMessage(event) {   
    setComments(event.target.value);

 
  }
  

  function clickedButton() {
    const allPreviousComments = [...alltTheComments, comments]

    setalltTheComments(allPreviousComments)
  }

  return (
    <Container >
      
      <img className="img" alt="imagem-pessoas" src={Image} />
      <textarea  onChange={typedMessage}></textarea>
      <Button isOn={comments} onClick={clickedButton}>Comentar</Button>

      <List>
        {alltTheComments.map(coment =>(
          <li key={coment}>{coment} </li>
        ))}
        
        
      </List>
      
    </Container>
  );
  }

  export default App;

  // estado => variavel, so que essa variavel permite que eu atualize os itens na tela.
 // estado => variável, que toda vez que sofre alteração, o react recarrega a página
 //  event => tudo que digita no textearea ou input