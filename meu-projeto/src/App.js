
import './App.css';

function App() {

  const name = 'Camila'
  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = "https://www.google.com/search?q=cachorro&oq=cachorro&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyCggBEC4YsQMYgAQyDQgCEC4YsQMYyQMYgAQyBwgDEAAYgAQyDQgEEAAYkgMYgAQYigUyDQgFEAAYkgMYgAQYigUyCggGEC4YsQMYgAQyCggHEC4YsQMYgAQyBwgIEAAYgAQyCggJEAAYsQMYgATSAQk2MzM1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8#vhid=p9KC3Z5ItgAMRM&vssid=l"
            
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newname}.</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem" />
    
    </div>
  );
}

export default App;
