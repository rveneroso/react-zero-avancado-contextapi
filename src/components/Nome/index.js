import { UserContext } from "../../contexts/user";
import { useContext } from "react";

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext)
    return (
      <div>
        <span style={{ color: '#FF0000' }}>Bem vindo: {alunos} </span>
        <br/>
        <button onClick={ () => setAlunos('Jerry Goldsmith')}>Troca nome</button>
      </div>
    );
  }
  
  export default Nome;