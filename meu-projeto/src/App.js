
import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'



function App() {
  const nome = " de Oliveira"
  return (
    <div className="App">
      <h1>Teste CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome = "Camila"/>
      <SayMyName nome = {nome}/> 
      <Pessoa nome="Camila" 
      idade="31"
      profissão="Progamadora fullstack"
      foto="https://via.placeholder.com/150"/>


    </div>
  )
}

export default App;

