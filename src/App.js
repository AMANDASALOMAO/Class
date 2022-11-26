import './App.css';
import HelloWord from './components/HelloWord';
import SayName from './components/SayName';
import Pessoa from './components/Pessoa'

const name = "Amanda"
const newName = name.toUpperCase() //CAIXA ALTA

function sum(a, b){  //SOMA
  return a + b
}

function App() {
  return (
    <div className="App">
     <h2>Alterando o JSX</h2>
     <p>Olá, {newName}</p>
     <p>Soma: {sum(1, 2)}</p>
     <HelloWord/>
     <SayName nome="Amanda"/>

     <Pessoa
     nome="Amanda" 
     idade="23" 
     profissao="Desenvolvedor"
     />
    </div>
  );
}

export default App;
