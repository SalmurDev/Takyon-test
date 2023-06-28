import Login from './components/login';
import './App.css';


function App() {
  return (
    <>
      <header>
        <img
          className='logo'
          src="https://takyon.io/static/media/logo-takyon.b78b3de5c0b2d3aae512.png" alt="logo takyon"
        ></img>
      </header>
      <div className="App">
        <Login />
      </div></>
  );
}

export default App;
