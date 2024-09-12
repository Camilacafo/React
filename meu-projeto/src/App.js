
import './App.css'
import SayMyName from './components/SayMyName'


function App() {
  const nome = " de Oliveira"
  return (
    <div className="App">
      <SayMyName nome = "Camila"/>
      <SayMyName nome = "Cristina"/> 
      <SayMyName nome = "Augusta"/> 
      <SayMyName nome = "Ferreira"/> 
      <SayMyName nome = {nome}/> 

    </div>
  );
}

export default App;

