import Nome from '../Nome';

import { UserContext } from '../../contexts/user';
import { useContext } from 'react';

function Alunos() {
  const { alunos, qtdAlunos } = useContext(UserContext);
  return (
    <div>
      <h1>Componente Alunos: o aluno {alunos} está online </h1>
      <h2>Nossa escola conta hoje com {qtdAlunos} alunos</h2>
      <Nome />
    </div>
  );
}

export default Alunos;