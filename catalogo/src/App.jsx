import './App.css'
import { useState } from 'react';
import Cartao from './cartao';
import hamburguer from './hamburguer.js';
import bebidas from './bebidas.js';
import Slideshow from './promocao.jsx';
import Topo from './topo.jsx';
import Rodape from './rodape.jsx';


function App() {
  const [secao, setSecao] = useState("promocao");

  return (
    <>
  
    <Topo/>

    <div className="menu">
      <button onClick={() => setSecao("promocao")}>Promoção</button>
      <button onClick={() => setSecao("hamburguer")}>Hamburguer</button>
      <button onClick={() => setSecao("bebidas")}>Bebidas</button>
      </div>

      <div className='container'>
        {secao === "promocao" && <Slideshow />} 

        {secao === "hamburguer" &&
        hamburguer.map((hamburguer, index) => (
          <Cartao
          key={index}
          foto={hamburguer.foto}
          nome={hamburguer.nome}
          descricao={hamburguer.descricao}
          preco={hamburguer.preco}
          />
        ))}

          {secao === "bebidas" &&
        bebidas.map((bebidas, index) => (
          <Cartao
          key={index}
          foto={bebidas.foto}
          nome={bebidas.nome}
          descricao={bebidas.descricao}
          preco={bebidas.preco}
          />
        ))}

     </div>
     <Rodape/>
     </>
  );
}

export default App;