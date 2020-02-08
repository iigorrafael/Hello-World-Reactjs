import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './Components/MyInfo';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ContactCardProps from './Components/ContactCard';
import ContactCardObject from './Components/ContactCard';

//
//Teste GitHub
//


function App() {
  return(
    <div>
      <Header/>
      <nav>
        <MyInfo/>
      </nav>
      <main>
        <div>
          <p>conteudo da pagina...</p>
           {/* Exemplo de uso de propriedades... props */}
          {/* <ContactCardProps 
            name="Mr. Wiskerson" 
            imgurl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            phone="(44) 988291744" 
            email="email@email.com" 
          />
        
          <ContactCardProps 
            name="Mr. garfield" 
            imgurl="https://images.unsplash.com/photo-1513780043732-614405263485?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            phone="(44) 988291744" 
            email="email@email.com" 
          /> */}
        
          {/* Exemplo de uso de propriedades passando objeto */}
          <ContactCardObject 
            contact={{name: "Mr. jerry", imgurl:"https://images.unsplash.com/photo-1567170578400-9d182981f2a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            phone:"(44) 988291744", email:"email@email.com"}}
          />

          <ContactCardObject 
            contact={{name: "Mr. Garfield", imgurl:"https://images.unsplash.com/photo-1513780043732-614405263485?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            phone:"(44) 988291744", email:"email@email.com"}}
          />

        </div>
        
      </main>
      <Footer/>
    </div>
  )
}

//Teste GItHub

// function App() {
//   return ( 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
