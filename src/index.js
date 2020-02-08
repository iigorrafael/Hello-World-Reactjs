import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from './Components/MyInfo';

//Função dentro do arquivo... componente
function MyApp() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    );
  }; 

  //Como usar javascript com html...
  function Variaveis() {
    const firtsName = "Igor";
    const lastName  = "Rafael";

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours <17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    
    //adicionado varias tags css em uma variavel...
    //posso alterar os valores de forma dinamica...
    const styles = {
      color: "Blue",
      backgroundColor: "Black",
      fontSize: "50px"
    }

    return (
    // {} muda de html para javascript...
    //<h1>Hello {firtsName + " " + lastName}, good {timeOfDay}!</h1>
    
    //css dentro do comando ...
    //<h1 style={{color: "#FFaC00"}}>Hello {firtsName + " " + lastName}, good {timeOfDay}!</h1>
    
    //css utilizando a variavel com os comandos
    <h1 style={styles}>Hello {firtsName + " " + lastName}, good {timeOfDay}!</h1>
    
    );
  }  

//  ReactDOM.render(<Variaveis/>,document.getElementById("root"));

  ReactDOM.render(<App/>,document.getElementById("root"));
// RENDERIZAR VARIAVEIS...
//  ReactDOM.render(<Variaveis/>,document.getElementById("root"));

//Renderizando função de outro arquivo
// ReactDOM.render(<MyInfo />, document.getElementById('root'));

// RENDERIZANDO FUNÇÃO MyApp 
// ReactDOM.render(<MyApp />, document.getElementById('root'));

// RENDERIZANDO FUNÇÃO APP DO ARQUIVO APP.JS
// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(      
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
