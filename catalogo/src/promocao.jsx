import  { useState } from "react";
import foto15 from "./img/foto15.png";
import foto16 from "./img/foto16.png";
import foto17 from "./img/foto17.png";


function Slideshow() {
  const imagens = [foto15, foto16, foto17];
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximoSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 1) % imagens.length);
  };

  const voltarSlide = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="slideshow">
      <img src={imagens[indiceAtual]} alt={`Imagem ${indiceAtual + 1}`} className="banner"/>
    <div className="controles">
      <button onClick={voltarSlide}>Anterior</button>
      <button onClick={proximoSlide}>Próximo</button>
    </div>
    </div>
  );
}

export default Slideshow;