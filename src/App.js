import './App.css';
import './components/Alunos';
import Alunos from './components/Alunos';
import { useState } from 'react';

function App() {
  const [nomeAluno, setNomeAluno] = useState('Jerry Goldsmith');
  return (
    <div>
      <h1>Escola</h1>
      <hr/>
      <Alunos nome={nomeAluno} mudaNome={setNomeAluno}/>
    </div>
  );
}

export default App;
