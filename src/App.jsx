import Perfil from './components/Perfil'
import Formulario from './components/Fomulario'
import ReposList from './components/ReposList';
import { useState } from 'react';

function App() {
  const [formVisivel, setFormVisivel] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil  nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

    {formVisivel && (
      <Formulario />
    )}

      <button onClick={() => setFormVisivel(!formVisivel)} type="button">Toogle Form</button>
    </>
  );
}

export default App;
