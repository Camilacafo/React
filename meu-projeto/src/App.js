
import './App.css'
import SayMyName from './components/SayMyName'
import pessoa from './components/pessoa'


function App() {
  const nome = " de Oliveira"
  return (
    <div className="App">
      <SayMyName nome = "Camila"/>
      <SayMyName nome = "Cristina"/> 
      <SayMyName nome = "Augusta"/> 
      <SayMyName nome = "Ferreira"/> 
      <SayMyName nome = {nome}/> 
      <pessoa
      nome="Camila"
      idade="31"
      profissão="Progamadora FullStack"
      foto="https://via.placeholder.com/150/"/>

    </div>
  )
}

export default App;

