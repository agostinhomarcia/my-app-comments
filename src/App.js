import React, { useState } from "react";
import "./App.css";
import Image from "./img/people.svg";


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
    <div className="container">
      <div className="container-itens">
      <img className="img" alt="imagem-pessoas" src={Image} />
      <textarea className="box-comment" onChange={typedMessage}></textarea>
      <button className="btn" onClick={clickedButton}>Comentar</button>

      <ul>
        {alltTheComments.map(coment =>(
          <li className="comment" key={coment}>{coment} </li>
        ))}
        
        
      </ul>
      </div>
    </div>
  );
  }

  export default App;

  // estado => variavel, so que essa variavel permite que eu atualize os itens na tela.
 // estado => variável, que toda vez que sofre alteração, o react recarrega a página
 //  event => tudo que digita no textearea ou input