import './App.css'; //importando o css do estilo
import ConteudoLateral from './componentes/ConteudoLateral';
import ConteudoPrincipal from './componentes/ConteudoPrincipal';
import ConteudoFinal from './componentes/ConteudoFinal';



export default function App() {
  // a funçao está retornando o JSX para ser mostrado na tela
  // a funçao é obrigatoria ter um RETURN

  // JSX (HTML do javascript)
  return (
    <div className="App">
      <ConteudoLateral />
      <ConteudoPrincipal />
      <ConteudoFinal />
    </div>
  );
}


