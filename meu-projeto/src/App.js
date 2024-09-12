
import './App.css'
import SayMyName from './components/SayMyName'
import pessoa from './components/Pessoa'

function App() {
  const nome = " de Oliveira"
  return (
    <div className="App">
      <SayMyName nome = "Camila"/>
      <SayMyName nome = "Cristina"/> 
      <SayMyName nome = "Augusta"/> 
      <SayMyName nome = "Ferreira"/> 
      <SayMyName nome = {nome}/> 
      <Pessoa 
      foto="https://via.placeholder.com/150"
      nome="Camila" 
      idade="28"
      profissão="Progamadora FullStack"/>
    </div>
  );
}

export default App;

